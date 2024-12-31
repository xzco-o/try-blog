export default function PostDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black text-white">
      {/* 顶部导航 */}
      <header className="p-4 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Huix</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="max-w-6xl mx-auto py-10 px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* 标题部分 */}
          <h1 className="text-4xl font-bold mb-4">Hello World</h1>
          <div className="flex items-center text-gray-400 space-x-2 mb-6">
            <span>Huix</span>
            <span>•</span>
            <span>Dec 31, 2024</span>
            <span>•</span>
            <span>1 min read</span>
            <span>•</span>
            <span>460 views</span>
          </div>

          {/* 文章内容 */}
          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Quick Start</h2>
            <p>
              Welcome to Huix! This is your very first post. Check{" "}
              <a href="#" className="text-blue-400 underline">
                documentation
              </a>{" "}
              for more info. If you get any problems when using Huix, you can
              find the answer on GitHub.
            </p>
            <h3>Create a new post</h3>
            <code>npx create-post</code>
            <h3>Run server</h3>
            <code>npm run dev</code>
            <h3>Generate static files</h3>
            <code>npm run generate</code>
            <h3>Deploy to remote sites</h3>
            <code>npm run deploy</code>
          </article>
        </div>

        {/* 评论部分 */}
        <div className="mt-10 bg-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Comments</h3>
          <p className="text-gray-400 italic mb-4">
            No comments yet. Be the first to share your thoughts!
          </p>
          <form>
            <textarea
              placeholder="Leave a comment..."
              className="w-full bg-gray-800 text-gray-300 p-4 rounded-lg mb-4"
              rows="4"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* 底部 */}
      <footer className="p-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          © 2024 Huix. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
