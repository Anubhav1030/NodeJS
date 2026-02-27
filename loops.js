//Sum from 1 to 5
let sum = 0;
let i =1;

while (i <=5) {
    sum +=i;
    i++;
}
console.log(sum);

//Countdown

let count =5;
let arr = [];


while (count > 0) {
    arr.push(count);
    count--;
}
console.log(arr);

//for loop multipy
let numbers = [1, 2, 3, 4, 5];

// New array to store multiplied values
let multiplied = [];

// Multiply each element by 2 and store in new array
for (let j = 0; j < numbers.length; j++) {
    multiplied.push(numbers[j] * 2);
}

console.log("Original:", numbers);      // [1, 2, 3, 4, 5]
console.log("Multiplied:", multiplied); // [2, 4, 6, 8, 10]