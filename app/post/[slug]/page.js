export default function ArticlePage({ params }) {
  const { slug } = params; // 动态路由参数
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <article className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{slug}</h1>
        <div className="text-gray-400 mb-6">
          <p>By Huix • Dec 31, 2024 • 1 min read • 460 views</p>
        </div>
        <div className="prose prose-invert max-w-none">
          <p>
            Welcome to the article &quot;{slug}&quot;! This is an example
            article page.
          </p>
        </div>
      </article>
    </div>
  );
}
