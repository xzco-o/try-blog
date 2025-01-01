import { useCallback, useEffect, useRef, useState } from "react";

const SnakeGame = ({ onGameOver }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const gridSize = 20;
  const canvasSize = 400;
  const snake = useRef([
    { x: 160, y: 160 },
    { x: 140, y: 160 },
    { x: 120, y: 160 },
  ]);
  const [food, setFood] = useState({ x: 200, y: 200 });
  const [direction, setDirection] = useState({ dx: gridSize, dy: 0 });
  const gameInterval = useRef(null);

  const updateGame = useCallback(
    (ctx) => {
      const newSnake = [...snake.current];
      const head = {
        x: newSnake[0].x + direction.dx,
        y: newSnake[0].y + direction.dy,
      };

      // 检查碰撞
      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= canvasSize ||
        head.y >= canvasSize ||
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        setIsPaused(true);
        if (onGameOver) onGameOver(score);
        return;
      }

      newSnake.unshift(head);

      // 吃食物
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1);
        setFood({
          x: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize,
          y: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize,
        });
      } else {
        newSnake.pop();
      }

      snake.current = newSnake;

      // 绘制游戏
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      ctx.fillStyle = "green";
      newSnake.forEach((segment) =>
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize)
      );
      ctx.fillStyle = "red";
      ctx.fillRect(food.x, food.y, gridSize, gridSize);
    },
    [canvasSize, direction, food, gridSize, onGameOver, score]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (gameOver) {
          startGame();
        } else {
          setIsPaused(!isPaused);
        }
        return;
      }

      if (isPaused) return;

      const { dx, dy } = direction;
      if (e.key === "w" && dy === 0) setDirection({ dx: 0, dy: -gridSize });
      if (e.key === "s" && dy === 0) setDirection({ dx: 0, dy: gridSize });
      if (e.key === "a" && dx === 0) setDirection({ dx: -gridSize, dy: 0 });
      if (e.key === "d" && dx === 0) setDirection({ dx: gridSize, dy: 0 });
    },
    [direction, gameOver, gridSize, isPaused]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!isPaused && !gameOver) {
      gameInterval.current = setInterval(() => updateGame(ctx), 100);
    } else {
      clearInterval(gameInterval.current);
    }

    return () => clearInterval(gameInterval.current);
  }, [isPaused, gameOver, updateGame]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const startGame = () => {
    setGameOver(false);
    setScore(0);
    setFood({
      x: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize,
      y: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize,
    });
    snake.current = [
      { x: 160, y: 160 },
      { x: 140, y: 160 },
      { x: 120, y: 160 },
    ];
    setDirection({ dx: gridSize, dy: 0 });
    setIsPaused(false);
  };

  return (
    <div className="text-center">
      <h2 className="text-white text-2xl mb-4">Score: {score}</h2>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="bg-gray-800 border-2 border-white"
      />
      {gameOver && (
        <p className="text-white mt-4">Game Over! Press Enter to Restart</p>
      )}
      {isPaused && !gameOver && (
        <p className="text-white mt-4">Press Enter to Start/Resume</p>
      )}
    </div>
  );
};

export default SnakeGame;
