export default function EditorSelection() {
  const articles = [
    { title: "Story", date: "Dec 6, 2024" },
    { title: "Hello World", date: "Dec 5, 2024" },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold text-purple-400">
        EDITOR&apos;S SELECTION
      </h3>
      <ul className="mt-4 space-y-2">
        {articles.map((article, index) => (
          <li key={index} className="text-gray-300">
            {article.title}{" "}
            <span className="text-gray-500">({article.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
