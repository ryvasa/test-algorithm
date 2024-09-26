const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const subtractingDiagonal = () => {
  const firstDiagonal = matrix.reduce((sum, row, index) => sum + row[index], 0);
  const secondDiagonal = matrix.reduce(
    (sum, row, index) => sum + row[matrix.length - 1 - index],
    0,
  );

  return firstDiagonal - secondDiagonal;
};

console.log(subtractingDiagonal());
