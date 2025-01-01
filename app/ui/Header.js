"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link"; // 引入 Link
import { usePathname } from "next/navigation"; // 替换 useRouter

export default function Header({ author }) {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname(); // 获取当前路径

  // 动态页面加载
  const pages = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Game", path: "/game" },
      { name: "About", path: "/about" },
      // 根据需要添加更多页面
    ],
    []
  );

  const handleScroll = () => {
    const top = window.scrollY || document.documentElement.scrollTop;
    setIsSticky(top > 0);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* 左侧内容 */}
        <div className="flex items-center space-x-4">
          {/* 头像与作者信息 */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              width={40} // 必须指定宽度
              height={40} // 必须指定高度
              className="rounded-full border-2 border-gray-300 group-hover:scale-110 transition-transform"
            />
            <span className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
              {author}
            </span>
          </div>
          {/* 动态页面名称 */}
          <nav className="flex space-x-4">
            {pages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className={`text-sm font-medium px-3 py-1 rounded-md transition-colors ${
                  pathname === page.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* 右侧内容 */}
        <div className="flex items-center space-x-4">
          {/* 搜索按钮 */}
          <button
            onClick={() => alert("搜索框弹出")}
            className="text-white hover:text-blue-400 transition-colors text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* 明暗模式切换 */}
          {/* <ModeToggle /> */}
        </div>
      </div>

      {/* 返回顶部按钮 */}
      {isSticky && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-transform transform hover:scale-110"
        >
          ↑
        </button>
      )}
    </header>
  );
}
