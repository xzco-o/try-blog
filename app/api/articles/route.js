export async function GET(request) {
  const articles = [
    {
      title: "Stop selling out science to commerce",
      description: "DO COMMERCIAL pressures have a n...",
      date: "Dec 10, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/Stop-selling-out-science-to-commerce",
    },
    {
      title: "What Makes a Good Story?",
      description: "Focusing on Plot, Structure, and Rhythm...",
      date: "Dec 6, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/story",
    },
    {
      title: "Hello World",
      description: "Welcome to Hexo! This is your very first post.",
      date: "Dec 5, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/hello-world",
    },
    {
      title: "Hello World",
      description: "Welcome to Hexo! This is your very first post.",
      date: "Dec 5, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/hello-world",
    },
    {
      title: "Hello World",
      description: "Welcome to Hexo! This is your very first post.",
      date: "Dec 5, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/hello-world",
    },
    {
      title: "Hello World",
      description: "Welcome to Hexo! This is your very first post.",
      date: "Dec 5, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/hello-world",
    },
    {
      title: "Hello World",
      description: "Welcome to Hexo! This is your very first post.",
      date: "Dec 5, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/hello-world",
    },
    {
      title: "Hello World",
      description: "Welcome to Hexo! This is your very first post.",
      date: "Dec 5, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/hello-world",
    },
    {
      title: "Hello World",
      description: "Welcome to Hexo! This is your very first post.",
      date: "Dec 5, 2024",
      tags: ["Article"],
      thumbnail: "/default-cover.jpg",
      link: "/post/hello-world",
    },
  ];

  return new Response(JSON.stringify(articles), { status: 200 });
}
