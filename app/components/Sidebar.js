export default function Sidebar() {
  return (
    <div className="space-y-4">
      {/* 作者信息 */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <h3 className="text-xl font-bold text-white">Huix</h3>
        <p className="text-gray-400 mt-2">13k Words | 3 Articles</p>
      </div>

      {/* 最新评论 */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold text-purple-400">Recent Comments</h3>
        <ul className="mt-2 text-gray-400">
          <li>Comment 1...</li>
          <li>Comment 2...</li>
        </ul>
      </div>

      {/* 标签 */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold text-purple-400">Tags</h3>
        <div className="mt-2 flex space-x-2">
          <span className="px-2 py-1 bg-gray-700 rounded">Tag1</span>
          <span className="px-2 py-1 bg-gray-700 rounded">Tag2</span>
        </div>
      </div>
    </div>
  );
}
