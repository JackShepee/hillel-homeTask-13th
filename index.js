function create2DArray(outerSize, innerSize, value) {
  // Валідація вхідних даних
  if (
    typeof outerSize !== "number" ||
    typeof innerSize !== "number" ||
    outerSize <= 0 ||
    innerSize <= 0 ||
    Math.floor(outerSize) !== outerSize ||
    Math.floor(innerSize) !== innerSize
  ) {
    console.log("Size inputs must be positive integers");
  }

  return Array(outerSize)
    .fill()
    .map(() => Array(innerSize).fill(value));
}

const array = create2DArray(2, 4, "hillel");
console.log(array);
