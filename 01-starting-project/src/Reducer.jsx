const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayResolved = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

import React from "react";

function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Transform the array using reduce
  const arrayResolved = array.reduce((acc, value, index) => {
    const chunkSize = 3; // Specify the size of each sub-array
    const chunkIndex = Math.floor(index / chunkSize);

    // If the chunk at the current index doesn't exist, create it
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    // Push the current value into the current chunk
    acc[chunkIndex].push(value);

    return acc;
  }, []);

  // Display the result
  return (
    <div>
      <h1>Transformed Array</h1>
      <pre>{JSON.stringify(arrayResolved, null, 2)}</pre>
    </div>
  );
}

export default App;
