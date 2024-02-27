
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
const number = 3456234223;
console.log(number.toLocaleString("en-us")); // 3,456,234,223
console.log(cars.toString()); //Saab,Volvo,BMW,Mercedez
console.log(cars.join(", ")); //Saab, Volvo, BMW, Mercedez

//1- String to Array )

const text = "I am preparing for my frontend Interview";
const wordsFromText = text.split(" ");
let indexOfInterview = wordsFromText.indexOf("Interview");
wordsFromText.splice(indexOfInterview, 0, "Intership"); //Adding Internship exactly before Interview
console.log(wordsFromText); //[ 'I', 'am', 'preparing', 'for', 'my', 'frontend', 'Intership', 'Interview' ]


//1-Adding element to an array
cars.push("Bugatti"); //Adding to the end
cars.unshift("Toyota"); //Adding at the beginning

//1-Removing element to an array
cars.shift(); //Removing the first element
cars.pop(); //Removing the last element
console.log(cars);

//1- Findind type of an Array
console.log(cars instanceof Array); // true if it's an array
console.log(typeof cars); // returns objects

//1-THE at METHOD
console.log(cars.at(2).toUpperCase());
console.log(cars.at(cars.length - 1)); //Accessing the last element

//1-LOOPING METHODS
//1-LOOPING METHODS
//1-LOOPING METHODS
//1-LOOPING METHODS

//1-LOOPING METHODS
//1-LOOPING METHODS
