
// ARRAY 
const cars = ["Saab", "Volvo", "BMW", "Mercedez"];
//const cars = new Array("Saab", "Volvo", "BMW", "Mercedez");

// LOOPING METHODS
cars.forEach((car) => console.log(car.toUpperCase())); //forEach

for(let i = 0; i < cars.length; i++) { //for loop
    console.log(cars[i].toUpperCase());
}

let i = 0;
while(i < cars.length) { //while loop
    console.log(cars[i].toLowerCase());
    i++;
}

//  Array to String
const number = 3456234223;
console.log(number.toLocaleString("en-us")); // 3,456,234,223
console.log(cars.toString()); //Saab,Volvo,BMW,Mercedez
console.log(cars.join(", ")); //Saab, Volvo, BMW, Mercedez

//  String to Array )
const text = "I am preparing for my frontend Interview";
const wordsFromText = text.split(" ");
let indexOfInterview = wordsFromText.indexOf("Interview");
wordsFromText.splice(indexOfInterview, 0, "Intership"); //Adding Internship exactly before Interview
console.log(wordsFromText); //[ 'I', 'am', 'preparing', 'for', 'my', 'frontend', 'Intership', 'Interview' ]


// Adding element to an array
cars.push("Bugatti"); //Adding to the end
cars.unshift("Toyota"); //Adding at the beginning

// Removing element to an array
cars.shift(); //Removing the first element
cars.pop(); //Removing the last element
console.log(cars);

// Findind type of an Array
console.log(cars instanceof Array); // true if it's an array
console.log(typeof cars); // returns objects

// THE at METHOD
console.log(cars.at(2).toUpperCase());
console.log(cars.at(cars.length - 1)); //Accessing the last element

// Concatenating arrays
const firstArray = [34, 56, 23];
const secondArray = [54, 17, 43];
const thirdArray = [64, 23, 78];
const mergedArray = firstArray.concat(secondArray, thirdArray);
console.log(mergedArray); // [ 34, 56, 23, 54, 17, 43, 64, 23, 78 ]

//  The copyWithin method
mergedArray.copyWithin(2, 0, 3);
console.log(mergedArray); // [34, 56, 34, 56, 23, 54]

// Flatting an array
const multiDimensionalArray = [[1,2],[3,4],[5,6]];
const flattenedArray = multiDimensionalArray.flat();
console.log(flattenedArray); //[ 1, 2, 3, 4, 5, 6 ]

// Taking a part of the array
console.log(flattenedArray.slice(0, 3)); //The first three elements

// METHODS WITH CALLBACKS

// Sort and Reverse
const names = ["Blatter", "Ander", "Wado", "Jeff", "Roger"];
const sortedNames = names.sort();
console.log(sortedNames); // [ 'Ander', 'Blatter', 'Jeff', 'Roger', 'Wado' ]
console.log(sortedNames.reverse()); // [ 'Wado', 'Roger', 'Jeff', 'Blatter', 'Ander' ]

const numbers = [40, 100, 1, 5, 25, 10];

const sortedNumbers = numbers.sort((a, b) => a - b); 
console.log(sortedNumbers);
console.log(sortedNumbers.reverse());

//Reverse 
