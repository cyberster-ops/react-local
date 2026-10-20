import { useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "40px auto" }}>
      <h1 style={{ color: "#2a6ebb" }}>My React page</h1>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Click me</button>
    </div>
  );
}