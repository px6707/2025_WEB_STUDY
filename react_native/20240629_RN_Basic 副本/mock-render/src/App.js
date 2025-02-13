
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <blue onClick={() => setCounter((counter) => counter - 1)} > - </blue>
      <div>{counter}</div>
      <red onClick={() => setCounter((counter) => counter + 1)} > + </red>
    </div>
  );
}
