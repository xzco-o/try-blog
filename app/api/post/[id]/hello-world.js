export default function handler(req, res) {
  const { id } = req.query;

  // 模拟的文章数据
  const posts = {
    1: {
      title: "My First Post",
      content:
        "<p>This is the content of the first post. You can add rich HTML here.</p>",
      author: "John Doe",
      date: "2024-12-30",
    },
    2: {
      title: "Learning Next.js",
      content:
        "<p>This is a guide on how to use Next.js for building React applications.</p>",
      author: "Jane Smith",
      date: "2024-12-28",
    },
  };

  const post = posts[id];

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
}
