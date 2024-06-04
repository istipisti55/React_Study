import NumericButton from "./numericButtons/NumericButton";

function TableGrid() {
  const wishArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  


  const array = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]].map((item, index) => {
    return (
      <tr key={index}>
        {item.map((item2, index2) => {
          return (
            <td>
              <NumericButton key={index2} onClick={console.log}>
                {item2}
              </NumericButton>
            </td>
          );
        })}
      </tr>
    );
  });

  const tempArray = [
    [1, 2],
    [3, 4],
  ];
  const testArray = tempArray.map((item, index) => {
    return item.map((innerItem) => {
      return innerItem * 10;
    });
  });

  console.log(testArray);

  return (
    <>
      <table border="2">{array}</table>
    </>
  );
}

export default TableGrid;
