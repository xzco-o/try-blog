export default function ArticleGrid() {
  const articles = Array(6).fill({
    title: "Sample Article",
    description: "This is a brief description of the article.",
    date: "Dec 5, 2024",
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-md shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-bold text-white">{article.title}</h3>
          <p className="text-gray-400 mt-2">{article.description}</p>
          <p className="mt-2 text-sm text-gray-500">Shared on {article.date}</p>
        </div>
      ))}
    </div>
  );
}
