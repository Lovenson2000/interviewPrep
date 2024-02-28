
// ARRAY 
const cars = ["Saab", "Volvo", "BMW", "Mercedez"];
//const cars = new Array("Saab", "Volvo", "BMW", "Mercedez");

// LOOPING METHODS
cars.forEach((car) => console.log(car.toUpperCase())); //forEach

for (let i = 0; i < cars.length; i++) { //for loop
    console.log(cars[i].toUpperCase());
}

let i = 0;
while (i < cars.length) { //while loop
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

//checking if an element exists in an array
console.log(cars.includes("Volvo")); // true

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
const multiDimensionalArray = [[1, 2], [3, 4], [5, 6]];
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
console.log(sortedNumbers); // [1, 5, 10, 25, 40, 100 ]
console.log(sortedNumbers.reverse()); //[ 100, 40, 25, 10, 5, 1 ]

// Average and Sum using reduce
const ages = [23, 19, 14, 26, 46, 8];
const sum = ages.reduce((acc, current) => acc + current, 0);
const average = parseFloat(sum / ages.length).toFixed(2); // up to 2 decimals
console.log("Sum is ", sum, "and average is: ", average);

// Filtering methods(filter, find, some)

//filter
const prices = [34, 54, 23, 17, 88, 21, 67, 48];
const pricesGreatherThanTwenty = prices.filter((price) => price > 20);
console.log(pricesGreatherThanTwenty);

//some
const hasPriceGreaterThanNinety = prices.some((price) => price > 90);
console.log(hasPriceGreaterThanNinety); // false

//find
const firstNumberGreaterThanTwenty = prices.find((price) => price > 20);
console.log(firstNumberGreaterThanTwenty); //34

const lastNumberGreaterThanTwenty = prices.findLast((price) => price > 20);
console.log(lastNumberGreaterThanTwenty); //48

//map 
const halfOfEachPrice = prices.map((price) => price / 2);
console.log(halfOfEachPrice); //[17, 27, 11.5, 8.5, 44, 10.5, 33.5, 24]

// MATH

// random number
const randomNumberFromZeroToTwenty = Math.floor(Math.random() * 21); // + 1 will start from 1 rather than 0
console.log(randomNumberFromZeroToTwenty);

// minimum and maximum values in an array
const arrayAges = [23, 19, 14, 26, 46, 8];
const lowestAge = Math.min(...arrayAges);
const highestAge = Math.max(...arrayAges);
console.log(`Oldest age is: ${highestAge}\nYoungest age is: ${lowestAge}`);

// comparison operators
let x = 5;
console.log( x == "5"); //true Loose equality (performs type coercion)
console.log( x == 5); // true
console.log( x === "5"); //false Strict equality (checks both type and value)
console.log( x === 5); // true
console.log(x !== "5"); // true Strict inequality 
console.log( x !== 5 ); // false
// variable hoisting
console.log(y); // undefined
var y = 10;
console.log(y); // 10

// CLASS
class Student {
    constructor(name) {
        this.name = name;
    }
}

let student = new Student("Blatter");
console.log(student.name); // Blatter

// STRING
// String Methods
const textString = "javascript";
console.log(textString.at(0)); // j
console.log(textString.charCodeAt(0)); // returns the unicode of j (106)
console.log(textString.startsWith("JAV".toLowerCase())); // true
console.log(textString.endsWith("Script")); // false
console.log(textString.includes("vas")); // true
console.log(textString.slice(0, 4).localeCompare("java")); // returns 0 cause it's true (-1 if it was false)
console.log(textString.replace(textString.splice(textString.indexOf("s")), ""));
