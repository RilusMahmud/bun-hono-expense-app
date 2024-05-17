import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { api } from "@/lib/api";

function App() {
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    // Fetch the total amount spent from the server
    async function fetchTotalSpent() {
      const res = await api.v1.expenses["total-spent"].$get();
      const data = await res.json();
      setTotalSpent(data.total);
    }
    fetchTotalSpent();
  }, []);

  return (
    <Card className="w-[350px] m-auto">
      <CardHeader>
        <CardTitle>Total Spent</CardTitle>
        <CardDescription>The total amount you have spent!</CardDescription>
      </CardHeader>
      <CardContent>{totalSpent}</CardContent>
    </Card>
  );
}

export default App;
