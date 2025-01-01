// components/SnakeGame.js
import { useEffect, useRef, useState } from "react";

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true); // 游戏初始为暂停状态

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const gridSize = 20;
    const canvasSize = 400;
    const snake = [
      { x: 160, y: 160 },
      { x: 140, y: 160 },
      { x: 120, y: 160 },
    ];
    let food = { x: 200, y: 200 };
    let dx = gridSize;
    let dy = 0;
    let gameInterval;

    function drawSnake() {
      ctx.fillStyle = "green";
      snake.forEach((segment) => {
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
      });
    }

    function drawFood() {
      ctx.fillStyle = "red";
      ctx.fillRect(food.x, food.y, gridSize, gridSize);
    }

    function moveSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        setScore((prevScore) => prevScore + 1);
        food = {
          x: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize,
          y: Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize,
        };
      } else {
        snake.pop();
      }
    }

    function checkCollision() {
      const head = snake[0];
      if (
        head.x < 0 ||
        head.x >= canvasSize ||
        head.y < 0 ||
        head.y >= canvasSize
      ) {
        return true;
      }
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          return true;
        }
      }
      return false;
    }

    function update() {
      if (checkCollision()) {
        setGameOver(true);
        clearInterval(gameInterval);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveSnake();
      drawSnake();
      drawFood();
    }

    function startGame() {
      setGameOver(false);
      setScore(0);
      snake.length = 3;
      snake[0] = { x: 160, y: 160 };
      dx = gridSize;
      dy = 0;
      gameInterval = setInterval(update, 100);
    }

    function handleKeyDown(event) {
      // 按空格键开始游戏或暂停
      if (event.key === "Enter" && gameOver === false) {
        setIsPaused(!isPaused); // 切换暂停状态
        if (isPaused) {
          gameInterval = setInterval(update, 100); // 游戏开始
        } else {
          clearInterval(gameInterval); // 游戏暂停
        }
      }

      // 使用 WASD 控制方向
      if (!isPaused) {
        if (event.key === "w" && dy === 0) {
          dx = 0;
          dy = -gridSize;
        } else if (event.key === "s" && dy === 0) {
          dx = 0;
          dy = gridSize;
        } else if (event.key === "a" && dx === 0) {
          dx = -gridSize;
          dy = 0;
        } else if (event.key === "d" && dx === 0) {
          dx = gridSize;
          dy = 0;
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    if (!gameOver && !isPaused) {
      startGame();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(gameInterval);
    };
  }, [isPaused, gameOver]);

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
        <button
          onClick={() => setGameOver(false)}
          className="mt-4 text-white bg-red-600 p-2 rounded"
        >
          Restart
        </button>
      )}
      {isPaused && !gameOver && (
        <p className="text-white mt-4">Press Enter to Start</p>
      )}
    </div>
  );
};

export default SnakeGame;
