//With Ramda
const R = require("ramda");

const cart = [
    {name: "Item 1", price: 10},
    {name: "Item 2", price: 20},
    {name: "Item 3", price: 30},
];

const totalPrice = R.reduce(R.add, 0, R.pluck("price", cart));

console.log("Total price with Ramda: ", totalPrice);