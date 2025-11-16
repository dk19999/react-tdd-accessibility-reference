import { useState } from "react";
import { stringCalculator } from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    if (!input.trim()) {
      setResult(null);
      return;
    }

    try {
      const value = stringCalculator(input);
      setResult(value);
      setError(null);
    } catch {
      setResult(null);
      setError("Invalid input. Please enter only numbers.");
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", color: "#aaa" }}>
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={600}
        height={400}
      />

      <h2>String Calculator</h2>

      <h1 style={{ fontSize: "20px" }}>Enter numbers</h1>

      <label htmlFor="numbers-input">Numbers to calculate</label>

      <textarea
        id="numbers-input"
        style={{ margin: "10px 0", color: "#aaa" }}
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: "10px",
          backgroundColor: "#008cba",
          color: "#fff",
          border: "none",
        }}
      >
        Calculate
      </button>

      <div role="status" aria-live="polite" aria-atomic="true">
        {result !== null && <p>Result: {result}</p>}
      </div>

      {error && (
        <p role="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default App;
