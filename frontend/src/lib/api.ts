import { hc } from "hono/client";
import { type ApiRoutes } from "@server/app";
import { queryOptions } from "@tanstack/react-query";
import { type CreateExpense } from "@server/utils/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const client = hc<ApiRoutes>("/");

export const api = client.api;

async function getCurrentUser() {
  const res = await api.v1.me.$get();
  if (!res.ok) {
    throw new Error("Failed to fetch total spent");
  }
  const data = await res.json();
  return data;
}

export const userQueryOptions = queryOptions({
  queryKey: ["get-current-user"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});

export async function getAllExpenses() {
  // new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await api.v1.expenses.$get();
  if (!res.ok) {
    throw new Error("Failed to fetch total spent");
  }
  const data = await res.json();
  // manipulate data here with data format with dayjs
  data.expenses = data.expenses.map((e) => ({
    ...e,
    // here e.date is in utc, convert into local time
    date: dayjs.utc(e.date).local().format("YYYY-MM-DD"),
  }));
  return data;
}

export const getAllExpensesQueryOptions = queryOptions({
  queryKey: ["get-all-expenses"],
  queryFn: getAllExpenses,
  staleTime: 1000 * 60 * 5, // 5 minutes
});

export async function createExpense({ value }: { value: CreateExpense }) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await api.v1.expenses.$post({ json: value });
  if (!res.ok) {
    throw new Error("Failed to create expense");
  }
  const newExpense = await res.json();
  return newExpense;
}

export const loadingCreateExpenseQueryOptions = queryOptions<{
  expense?: CreateExpense;
}>({
  queryKey: ["loading-create-expense"],
  queryFn: async () => {
    return {};
  },
  staleTime: Infinity,
});

export async function deleteExpense({ id }: { id: number }) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await api.v1.expenses[":id{[0-9]+}"].$delete({
    param: { id: id.toString() },
  });

  if (!res.ok) {
    throw new Error("Failed to delete expense");
  }
}
