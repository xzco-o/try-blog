import Header from "./ui/Header";
import Footer from "./ui/Footer";
import "./styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-300">
        {/* 顶部导航栏 */}
        <Header author="Huix" />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
        {/* 底部 */}
        <Footer />
      </body>
    </html>
  );
}
