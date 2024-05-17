import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

import { db } from "../db";
import { expenses as expensesTable } from "../db/schema/expenses";

const expenseSchema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string().min(3).max(100),
  amount: z.string(),
});

type Expense = z.infer<typeof expenseSchema>;

const createExpenseSchema = expenseSchema.omit({ id: true });

const fakeExpenses: Expense[] = [
  { id: 1, title: "Rent", amount: "1000" },
  { id: 2, title: "Food", amount: "200" },
  { id: 3, title: "Internet", amount: "50" },
];

export const expensesRoute = new Hono()
  .get("/", async (c) => {
    const expenses = await db.select().from(expensesTable);
    return c.json({ expenses: expenses });
  })
  .post("/", zValidator("json", createExpenseSchema), async (c) => {
    const expense = c.req.valid("json");

    const result = await db
      .insert(expensesTable)
      .values({
        ...expense,
        userId: "1",
      })
      .returning();

    // const expense = createExpenseSchema.parse(data);
    // fakeExpenses.push({ id: fakeExpenses.length + 1, ...expense });
    c.status(201);
    return c.json(result[0]);
  })
  .get("/total-spent", async (c) => {
    const total = fakeExpenses.reduce((acc, e) => acc + Number(e.amount), 0);
    return c.json({ total });
  })
  .get("/:id{[0-9]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const expense = fakeExpenses.find((e) => e.id === id);
    if (!expense) {
      return c.notFound();
    }
    return c.json({ expense });
  })
  .delete("/:id{[0-9]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const index = fakeExpenses.findIndex((e) => e.id === id);
    if (index === -1) {
      return c.notFound();
    }
    fakeExpenses.splice(index, 1);
    return c.json({ message: "Expense deleted" });
  });
