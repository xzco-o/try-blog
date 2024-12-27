import FeatureSection from "./components/FeatureSection";
import EditorSelection from "./components/EditorSelection";
import ArticleGrid from "./components/ArticleGrid";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Huix</h1>
          <nav className="flex space-x-4">
            <button className="text-gray-300 hover:text-white">Home</button>
            <button className="text-gray-300 hover:text-white">About</button>
            <button className="text-gray-300 hover:text-white">Contact</button>
          </nav>
        </div>
      </header>

      {/* 主内容区域 */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4">
          <FeatureSection />
          <div className="flex mt-8">
            {/* 左侧区域：推荐文章 + 网格文章 */}
            <div className="w-3/4 space-y-6">
              <EditorSelection />
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
