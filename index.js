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
    alert("Size inputs must be positive integers");
    return;
  }

  return Array(outerSize)
    .fill()
    .map(() => Array(innerSize).fill(value));
}

const enteredOuterSize = Number(prompt("Enter outer size of array"));
const enteredInnerSize = Number(prompt("Enter inner size of array"));
const enteredValue = prompt("Enter value for array");

if (enteredOuterSize && enteredInnerSize && enteredValue !== null) {
  const array = create2DArray(enteredOuterSize, enteredInnerSize, enteredValue);
  if (array !== undefined) {
    alert(JSON.stringify(array));
  }
} else {
  alert("Invalid inputs!");
}
