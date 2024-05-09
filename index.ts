import app from "./app";

Bun.serve({
  fetch: app.fetch,
});

console.log("bun server is runnnign on http://localhost:3000/");
