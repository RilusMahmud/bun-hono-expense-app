import { Hono } from "hono";
import { logger } from "hono/logger";

import { expensesRoute } from "./routes/expenses";
import { authRoute } from "./routes/auth";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

// app.route("/api/v1/expenses", expensesRoute).route("/", authRoute);

const apiRoutes = app
  .route("/api/v1")
  .route("/expenses", expensesRoute)
  .route("/", authRoute);

export default app;
export type ApiRoutes = typeof apiRoutes;
