import "./App.css";
import TableGrid from "./TableGrid";
import NumericScreen from "./NumericScreen";
import { useState } from "react";

const numbers = [
  [7, 8, 9, `+`],
  [4, 5, 6, `-`],
  [1, 2, 3, `*`],
  [0, `,`, `=`, `/`],
];

const [actualCharacter, setActualCharacter] = useState();

function handleClick(rowIndex, colIndex) {
  setActualCharacter(numbers[rowIndex][colIndex]);
}

function App() {
  return (
    <>
      <input type="text" required value={actualCharacter} />
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
