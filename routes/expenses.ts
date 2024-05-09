import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const createExpenseSchema = z.object({
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});

const fakeExpenses: Expense[] = [
  { id: 1, title: "Rent", amount: 1000 },
  { id: 2, title: "Food", amount: 200 },
  { id: 3, title: "Internet", amount: 50 },
];

export const expensesRoute = new Hono()
  .get("/", async (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", zValidator("json", createExpenseSchema), async (c) => {
    const data = await c.req.valid("json");
    const expense = createExpenseSchema.parse(data);
    console.log(expense);
    return c.json(expense);
  });
