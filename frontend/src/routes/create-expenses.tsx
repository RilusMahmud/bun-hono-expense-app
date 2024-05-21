import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useForm } from "@tanstack/react-form";

export const Route = createFileRoute("/create-expenses")({
  component: CreateExpenses,
});

function CreateExpenses() {
  const form = useForm({
    defaultValues: {
      title: "",
      amount: 0,
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <div className="p-2">
      <h2>Create Expense</h2>
      <form
        className="max-w-xl m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="title"
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Title</Label>
              <Input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.touchedErrors ? (
                <em>{field.state.meta.touchedErrors}</em>
              ) : null}
            </>
          )}
        />
        <form.Field
          name="amount"
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Amount</Label>
              <Input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                type="number"
                onChange={(e) => field.handleChange(Number(e.target.value))}
              />
              {field.state.meta.touchedErrors ? (
                <em>{field.state.meta.touchedErrors}</em>
              ) : null}
            </>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
