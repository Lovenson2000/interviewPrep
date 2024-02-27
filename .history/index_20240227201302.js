
// ARRAY 
const cars = ["Saab", "Volvo", "BMW", "Mercedez"];
//const cars = new Array("Saab", "Volvo", "BMW", "Mercedez");

//1-LOOPING METHODS
cars.forEach((car) => console.log(car.toUpperCase())); //forEach

for(let i = 0; i < cars.length; i++) { //for loop
    console.log(cars[i].toUpperCase());
}

let i = 0;
while(i < cars.length) { //while loop
    console.log(cars[i].toLowerCase());
    i++;
}

//1- Array to String
const number = 3456234223; // 3,456,234,223
console.log(number.toLocaleString("en-us"));
console.log(cars.toString());


//1-Adding element to an array
cars.push("Bugatti");

//1- Findind type of an Array
console.log(cars instanceof Array);
console.log(typeof cars); // returns objects

//1-THE at METHOD

console.log(cars.at(2).toUpperCase());

//1-LOOPING METHODS
//1-LOOPING METHODS
//1-LOOPING METHODS
//1-LOOPING METHODS

//1-LOOPING METHODS
//1-LOOPING METHODS
