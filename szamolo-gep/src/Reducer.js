const array1 = [1, 2, 3, 4, 5, 6];
// [3,7,11]
// 0 + 1 + 2 + 3 + 4

const reducer = (accumulator, currentValue, index) => {
  //   console.log(index%2, currentValue )
  if (index % 2 === 0) {
    return [...accumulator, currentValue];
  }
  if (index % 2 === 1) {
    const lastIndex = accumulator.length - 1;
    const lastAccumulatorElement = accumulator[lastIndex];
    const newLastElement = currentValue + lastAccumulatorElement;

    accumulator[lastIndex] = newLastElement;

    //  console.log(accumulator, lastAccumulatorElement, newLastElement)

    return accumulator;
  }
};

const initialValue = [];
const sumWithInitial = array1.reduce(reducer, initialValue);

console.log(sumWithInitial);
// Expected output: 10
