import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="flex flex-col bg-background">
          <button
            className=" text-foreground"
            onClick={() => setCount((count) => count + 1)}
          >
            up
          </button>
          <button
            className=" bg-secondary"
            onClick={() => setCount((count) => count + 1)}
          >
            down
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
