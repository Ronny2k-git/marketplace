const cars = [
  {
    name: "Toyota Camry",
    year: 2020,
    price: 104000,
  },
  {
    name: "Supra",
    year: 2018,
    price: 284000,
  },
  {
    name: "Honda Civic",
    year: 2010,
    price: 54000,
  },
  {
    name: "Ford Mustang",
    year: 2020,
    price: 340000,
  },
];

const filteredCars = cars.filter(
  (car) => car.year > 2015 && car.price < 600000
);

console.log("Filtered cars:", filteredCars);
