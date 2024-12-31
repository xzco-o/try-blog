export function GET(req) {
  const comments = [
    { author: "Alice", text: "This is a great post!", date: "2024-12-30" },
    { author: "Bob", text: "I agree, very informative!", date: "2024-12-29" },
    { author: "Charlie", text: "Thanks for sharing!", date: "2024-12-28" },
  ];

  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
