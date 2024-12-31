import React from "react";
import Header from "./ui/Header";
import FeatureSection from "./ui/home/FeatureSection";
import ArticleGrid from "./ui/home/ArticleGrid";
import Sidebar from "./ui/Sidebar";
import Footer from "./ui/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-gray-300 block mt-16 min-h-screen flex-col">
      {/* 顶部导航栏 */}
      <Header author="Huix" />

      {/* 主内容区域 */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4">
          <FeatureSection />
          <div className="flex mt-8">
            {/* 左侧区域：推荐文章 + 网格文章 */}
            <div className="w-3/4 space-y-6">
              <ArticleGrid />
            </div>
            {/* 右侧区域：侧边栏 */}
            <div className="w-1/4 ml-6">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      {/* 底部 */}
      <Footer />
    </div>
  );
}
