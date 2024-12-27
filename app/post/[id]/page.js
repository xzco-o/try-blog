export default function PostPage({ params }) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-800 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Post {id}</h1>
      </header>
      <main className="flex-1 px-8 py-6">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">Post {id}</h2>
          <p className="text-gray-600 mt-4">
            This is the content of post {id}. You can add markdown rendering or
            other features here.
          </p>
        </article>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 My Blog
      </footer>
    </div>
  );
}
