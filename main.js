//Task 1
let orders = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
];

//Task 2
console.log(`Number of drinks: ${orders[0].length}`);
console.log(`Number of pastries: ${orders[1].length}`);
console.log("\n");

//Task 3
console.log(orders[0][0], orders[1][2]);
console.log(orders[0][1], orders[1][1]);
console.log(orders[0][2], orders[1][1]);
console.log("\n");

//Task 4
let drink = 0;
let pastry = 0;
console.log(`Order: ${orders[0][drink]}, ${orders[1][pastry]}`);
console.log("\n");

//Task 5
for(let i = 0; i < orders[0].length; i++) {
    console.log(orders[0][i]);
};
console.log("\n");

//Task 6
console.log(orders[0].push("Flat White"));