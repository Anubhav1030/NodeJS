//Number

let age = 25;
let price = 99.99;
let negative = -10;

// Special number values
console.log(10 / 0);   // Infinity  (Java throws exception, JS doesn't)
console.log("abc" * 2); // NaN — Not a Number

console.log(typeof age); // "number"

//Boolean

let isLoggedIn = true;
let hasAccess = false;

// Expressions that produce boolean
console.log(10 > 5);      // true
console.log("a" === "b"); // false

console.log(typeof isLoggedIn); // "boolean"

//Undefined

let score; // declared but not assigned
console.log(score);         // undefined
console.log(typeof score);  // "undefined"

// Also what you get when accessing non-existent property
let user = {};
console.log(user.name); // undefined

//Null

let selectedUser = null; // deliberately empty

console.log(selectedUser);        // null
console.log(typeof selectedUser); // "object" ← famous JS bug, ignore it

//Symbol

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false — every symbol is unique
console.log(typeof id1);  // "symbol"

//String

let firstname = "Stephen";
let lastname = "Curry";

console.log(firstname + lastname);

let playerName = `Lebron`;
let familyname = `James`;

let greeting = `hello  ${playerName} ${familyname}`;
console.log(greeting);