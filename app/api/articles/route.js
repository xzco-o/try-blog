export async function GET(request) {
  const articles = [
    {
      id: 1,
      title: "Stop selling out science to commerce",
      summary: "Introduction to commercial pressures...",
      date: "Dec 10, 2024",
    },
    {
      id: 2,
      title: "What Makes a Good Story?",
      summary: "Focusing on plot, structure, and rhythm...",
      date: "Dec 6, 2024",
    },
    {
      id: 3,
      title: "Hello World",
      summary: "Welcome to Hexo! This is your very first post.",
      date: "Dec 5, 2024",
    },
  ];

  return new Response(JSON.stringify(articles), { status: 200 });
}
