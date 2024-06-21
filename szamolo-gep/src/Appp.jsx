import "./App.css";
import { useState } from "react";

const numbers = [
  ["7", "8", "9", `+`],
  ["4", "5", "6", `-`],
  ["1", "2", "3", `*`],
  ["0", `.`, `=`, `/`],
  ["clear"],
];

const operators = [`+`, `-`, `*`, `/`];

function add(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}

function multiple(a, b) {
  return a * b;
}
function minus(a, b) {
  return a - b;
}

function operationWrapper(operation) {
  if (operation === "-") return minus;
  if (operation === "*") return multiple;
  if (operation === "/") return divide;
  return add;
}

function App() {
  // const [actualCharacters, setActualCharacter] = useState("");
  // const [operation, setOperation] = useState([]);

  const [left, setLeft] = useState("");
  const [operation, setOperation] = useState("");
  const [right, setRight] = useState("");
  const [result, setResult] = useState("");

  function handleClick(rowIndex, colIndex) {
    const character = numbers[rowIndex][colIndex];

    if (character === "clear") {
      setLeft("");
      setOperation("");
      setRight("");
      setResult("");
    } else if (
      character === "=" &&
      left.length !== 0 &&
      right.length !== 0 &&
      operation.length !== 0
    ) {
      setResult(
        String(operationWrapper(operation)(Number(left), Number(right)))
      );
      setLeft("");
      setRight("");
      setOperation("");
    } else if (operators.includes(character)) {
      if (result.length !== 0) {
        setLeft(result);
        setOperation(character);
        setResult("");
      } else if (left.length !== 0) {
        setOperation(character);
        setResult("");
      }
    } else if (operation.length === 0) {
      setResult("");
      setLeft((prev) => prev + character);
    } else {
      setRight((prev) => prev + character);
    }

    // console.log(left, operation, right, new Date());
    //  if (typeof character === "number") {
    //   setActualCharacter((prev) => prev + character);
    //   setOperation((prev) => [...prev, "x"]);
    // } else if (typeof character === "string") {
    //   if (operation.length === 3 && operation[1] === "+") {
    //     const sum = add(operation[0], operation[2]);
    //     setActualCharacter(sum);
    //   }

    //   console.log("F3: ", operation);
    //   //operation.push(character);
    // }
    // console.log("F4: ", operation);
    // //   if char === szám akkor stringbe fűzni
    // //   if char= clear akkor blankesítés
    // // ["879", "+", "10"];
    // //const number = actualCharacters + character;
  }

  //const number = actualCharacters;
  // console.log(actualCharacters);
  return (
    <>
      <div
        style={{
          border: "solid 2px black",
          textAlign: "right",
          height: 28,
        }}
      >
        {result}
        {left}
        {operation}
        {right}
      </div>
      {numbers.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((number, colIndex) => (
            <td key={colIndex}>
              <button onClick={() => handleClick(rowIndex, colIndex)}>
                {number}
              </button>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default App;
