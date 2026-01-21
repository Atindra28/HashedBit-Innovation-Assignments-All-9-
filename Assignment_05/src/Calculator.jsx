import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Enter numbers");
      return;
    }

    if (op === "add") setResult(a + b);
    if (op === "sub") setResult(a - b);
    if (op === "mul") setResult(a * b);
    if (op === "div") {
      if (b === 0) setResult("Cannot divide by zero");
      else setResult(a / b);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h3>Calculator</h3>

        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={styles.input}
        />

        <div style={styles.buttons}>
          <button onClick={() => calculate("add")}>+</button>
          <button onClick={() => calculate("sub")}>−</button>
          <button onClick={() => calculate("mul")}>×</button>
          <button onClick={() => calculate("div")}>÷</button>
        </div>

        <div style={styles.result}>
          Result: {result}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  box: {
    width: "300px",
    padding: "20px",
    backgroundColor: "#e0e0e0",
    borderRadius: "6px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "6px",
    marginBottom: "10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  result: {
    fontWeight: "bold",
  },
};

export default Calculator;
