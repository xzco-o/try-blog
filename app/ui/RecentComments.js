"use client";

import React, { useEffect, useState } from "react";

export default function RecentComments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("/api/comments");
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl text-white font-semibold mb-4">Recent Comments</h3>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="flex items-start space-x-4 bg-gray-700 p-4 rounded-md"
          >
            <div className="flex-1">
              <div className="text-white font-semibold">{comment.author}</div>
              <div className="text-gray-300 mt-2">{comment.text}</div>
              <div className="text-gray-500 mt-2 text-sm">{comment.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
