import "./App.css";
import { useState } from "react";

const numbers = [
  [7, 8, 9, `+`],
  [4, 5, 6, `-`],
  [1, 2, 3, `*`],
  [0, `,`, `=`, `/`],
  ["clear"],
];

function App() {
  const [actualCharacters, setActualCharacter] = useState("");

  function handleClick(rowIndex, colIndex) {
    console.log(actualCharacters);
    const character = numbers[rowIndex][colIndex];
    //const number = actualCharacters + character;
    setActualCharacter((prev) => prev + character);
  }

  const number = actualCharacters;

  return (
    <>
      <input type="text" required value={number} />
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
