import { Hono } from "hono";
import { logger } from "hono/logger";

import { expensesRoute } from "./routes/expenses";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.route("/api/v1/expenses", expensesRoute);

export default app;
