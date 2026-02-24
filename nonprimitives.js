//Objects

let user = {
    name: "Steph",
    age: 25,
    city: "San Francisco",
    isLoggedIn: true
};

// Accessing values — two ways
console.log(user.name);        // "Steph" — dot notation
console.log(user["city"]);     // "San Francisco" — bracket notation

// Adding a new property
user.company = "Kyndryl";
console.log(user.company);     // "TCS"

// Modifying a property
user.age = 26;
console.log(user.age);         // 26

// Deleting a property
delete user.isLoggedIn;
console.log(user.isLoggedIn);  // undefined

console.log(typeof user);      // "object"

//Arrays

let players = ["Anubhav", "Stephen", "Lebron"];

// Indexing — same as Java
console.log(players[0]);  // "Anubhav"
console.log(players[2]);  // "Lebron"

// Length
console.log(players.length); // 3

// Adding elements
players.push("Durant");        // adds to end
players.unshift("Klay");      // adds to beginning
console.log(players);          // ["Klay", "Anubhav", "Stephen", "Lebron", "Durant"]

// Removing elements
players.pop();                 // removes from end
players.shift();               // removes from beginning
console.log(players);          // ["Anubhav", "Stephen", "Lebron"]

// Mixed types — valid in JS (avoid in practice)
let mixed = [1, "hello", true, null, { name: "Anubhav" }];

console.log(typeof players);   // "object" — arrays are objects internally
console.log(Array.isArray(players)); // true — use this to check if something is array


//Functions

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Anubhav")); // "Hello, Anubhav!"

// Function stored in a variable (function expression)
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// Arrow function — modern, shorter syntax you'll see everywhere in Node
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // 12

// Function passed as argument — this is huge in Node.js
function doOperation(a, b, operation) {
    return operation(a, b);
}
console.log(doOperation(10, 5, add));      // 15
console.log(doOperation(10, 5, multiply)); // 50

console.log(typeof greet); // "function" — but internally it's an object