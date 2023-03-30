//Without Ramda
const cart = [
    {name: "Item 1", price: 10},
    {name: "Item 2", price: 20},
    {name: "Item 3", price: 30},
];

let totalPrice = 0;

for(let i = 0; i < cart.length; i++){
    totalPrice +=cart[i].price;
}

console.log("Total price without Ramda: ", totalPrice);
