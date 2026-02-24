//If/Else Statements
let age = 25;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

//Switch Statements
let day = "Monday";

switch(day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("End of work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek");
}

//Ternary Operator
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access); // "Allowed"

// Nested ternary 
let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
console.log(grade); // "B"