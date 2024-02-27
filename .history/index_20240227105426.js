
//Array manipulation
const cars = ["Saab", "Volvo", "BMW", "Mercedez"];
//const cars = new Array("Saab", "Volvo", "BMW", "Mercedez");
cars.forEach((car) => console.log(car.toUpperCase()));

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i].toUpperCase());
}

console.log(cars.toString());