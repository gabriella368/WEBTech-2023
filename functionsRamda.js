const R = require('ramda')
const numbers = [1, 2, 3, 4, 5]

console.log("Numbers:", numbers);

const squareNumbers = R.map(num => num * num, numbers);
console.log("Squared numbers: ",squareNumbers);

const sum = R.reduce((acc, num) => acc + num, 0, numbers);
console.log("The sum of the numbers: ", sum);

const sumOfSquares = R.compose(
    R.reduce((acc, num) => acc + num, 0),
    R.map(num => num * num),
)(numbers);
console.log("Sum of the squared numbers: ", sumOfSquares);
