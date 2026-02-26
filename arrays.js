//Accessing Elements
let teaflavour = ["Green Tea", "Black Tea", "oolong tea", "White Tea", "Yellow Tea"];
let firstTea = teaflavour[0];
console.log(firstTea);

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
let favoriteCity = cities[2];
console.log(favoriteCity);

//Modifying Elements
teaflavour[1] = "masala chai";
console.log(teaflavour);

//Adding Elements
cities.push("San Francisco");
console.log(cities);

// Removing Elements
let lastTeaOrder = teaflavour.pop();
console.log(lastTeaOrder);

//Merging Arrays
let europeanCities = ["London", "Paris", "Berlin"];
let asianCities = ["Tokyo", "Seoul", "Beijing"];

let allCities = europeanCities.concat(asianCities);
console.log(allCities);

//Array length
let teaMenu = ["Green Tea", "Black Tea", "oolong tea", "White Tea", "Yellow Tea"];
console.log(teaMenu.length);

// SoftCopy/pass by reference
let softCopy = teaflavour;
console.log(softCopy);

//HardCopy/pass by value
let hardCopy = [...teaflavour];
console.log(hardCopy);

//Checking if an element exists
let cityBucketList = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
let isChicagoInBucketList = cityBucketList.includes("Chicago");
console.log(isChicagoInBucketList);
