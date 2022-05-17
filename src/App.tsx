import { useState } from "react";
import "./App.css";
import Button from "./lib/button";

function App() {
  const [count, setCount] = useState<number>(0);

  const onCount = (e: any) => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1>
        <Button onClick={onCount}>Click me</Button>
      </header>
    </div>
  );
}

export default App;
