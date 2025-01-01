"use client";

import React, { useState } from "react";
import SnakeGame from "../ui/game/Snake";
import PacmanGame from "../ui/game/Pacman";

export default function GamesPage() {
  const [currentGame, setCurrentGame] = useState("snake");
  const [leaderboard, setLeaderboard] = useState([
    { name: "Alice", score: 120 },
    { name: "Bob", score: 100 },
    { name: "Charlie", score: 80 },
  ]);
  const [playerName, setPlayerName] = useState("游客");

  // 添加分数到排行榜
  const addScore = (score) => {
    const newLeaderboard = [
      ...leaderboard,
      { name: playerName || "游客", score },
    ].sort((a, b) => b.score - a.score); // 按分数降序排序
    setLeaderboard(newLeaderboard);
  };

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex">
      {/* 游戏区域 */}
      <div className="w-3/4 flex items-center justify-center p-6">
        {currentGame === "snake" && <SnakeGame onGameOver={addScore} />}
        {currentGame === "pacman" && <PacmanGame onGameOver={addScore} />}
      </div>

      {/* 右侧：积分榜 */}
      <div className="w-1/4 bg-gray-800 p-6">
        <h2 className="text-2xl font-bold text-pink-400 mb-4">Leaderboard</h2>
        <ul>
          {leaderboard.map((player, index) => (
            <li
              key={index}
              className="flex justify-between py-2 px-3 bg-gray-700 rounded-lg mb-2"
            >
              <span>{player.name}</span>
              <span>{player.score}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Select Game</h3>
          <button
            onClick={() => setCurrentGame("snake")}
            className={`w-full py-2 px-4 rounded-lg mb-2 ${
              currentGame === "snake"
                ? "bg-pink-400 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Snake
          </button>
          <button
            onClick={() => setCurrentGame("pacman")}
            className={`w-full py-2 px-4 rounded-lg ${
              currentGame === "pacman"
                ? "bg-pink-400 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Pac-Man
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Player Name</h3>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
            className="w-full py-2 px-3 rounded-lg bg-gray-700 text-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
