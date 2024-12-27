import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-300">
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white text-xl font-bold">Huix</div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                简体中文
              </button>
              <button className="text-gray-300 hover:text-white">登录</button>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="bg-gray-800 p-4 text-center text-gray-400">
            © 2024 Huix
          </footer>
        </div>
      </body>
    </html>
  );
}
