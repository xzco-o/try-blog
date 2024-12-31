import React from "react";
import Layout from "../ui/layout";

export default function ArticlePage() {
  return (
    <Layout>
      <article className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Hello World</h1>
        <div className="text-gray-400 mb-6">
          <p>By Huix • Dec 31, 2024 • 1 min read • 460 views</p>
        </div>
        <div className="prose prose-invert max-w-none">
          <p>
            Welcome to Huix! This is your first post. Check the documentation
            for more details.
          </p>
        </div>
      </article>
    </Layout>
  );
}
