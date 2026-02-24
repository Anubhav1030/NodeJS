//Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333... (no int division like Java)
console.log(a % b);  // 1 (remainder)
console.log(a ** b); // 1000 (exponentiation — 10 to the power 3)

//Assignment Operators
let x = 10;
x += 5;  // x = 15
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6
x++;     // x = 7
x--;     // x = 6

//Comparison Operators
console.log(5 == "5");   // true  — compares only VALUE, converts types (loose equality)
console.log(5 === "5");  // false — compares VALUE + TYPE (strict equality)
console.log(5 !== "5");  // true  — strict not equal

console.log(10 > 5);   // true
console.log(10 >= 10); // true
console.log(5 < 3);    // false
console.log(5 <= 5);   // true

//Logical Operators
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)

// Practical example
let age = 25;
let hasID = true;
console.log(age >= 18 && hasID); // true
console.log(age <= 18 || hasID); // true  (AND)