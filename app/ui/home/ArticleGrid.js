"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/global.css";

export default function ArticleGrid() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    //从API获取文章
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error loading articles:", error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col relative">
      {/* Tabs */}
      <div className="tabs-container">
        <ul className="tabs">
          <li className="tab-item">
            <span className="tab-label">ALL</span>
          </li>
          <li className="tab-item">
            <span className="tab-label">CSS</span>
          </li>
          <li className="tab-item">
            <span className="tab-label">JS</span>
          </li>
          <li className="tab-item">
            <span className="tab-label">JSON</span>
          </li>
          <li className="tab-item">
            <span className="tab-label">HTML</span>
          </li>
          <li className="tab-item">
            <span className="tab-label">Linux</span>
          </li>
          <li className="tab-item">
            <span className="tab-label">RSS</span>
          </li>
          <li className="tab-item">
            <span className="tab-label">Arch</span>
          </li>
        </ul>
        <span className="dropdown-icon">▼</span>
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
        {articles.map((article, index) => (
          <li key={index}>
            <div
              className="article-card"
              style={{
                width: "300px", // 固定宽度
                height: "400px", // 固定高度
              }}
            >
              {/* Thumbnail */}
              <div className="thumbnail relative">
                <Image
                  src={article.thumbnail}
                  alt={`Thumbnail for ${article.title}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-md"
                />
                <span
                  className=" absolute inset-0 rounded-md"
                  style={{
                    background:
                      "linear-gradient(130deg, rgb(36, 198, 220), rgb(84, 51, 255) 41.07%, rgb(255, 0, 153) 76.05%)",
                    opacity: 0.5,
                  }}
                ></span>
              </div>
              {/* Content */}
              <div className="article-content ">
                <div className="article-title">
                  <Link href={article.link} className="block mt-2">
                    {article.title}
                  </Link>
                  <p className="article-description">{article.description}</p>
                </div>

                <div className="article-footer">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
