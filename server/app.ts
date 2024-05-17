import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

import { expensesRoute } from "./routes/expenses";
import { authRoute } from "./routes/auth";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app
  .route("/api/v1")
  .route("/expenses", expensesRoute)
  .route("/", authRoute);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
