//create an empty set

const companies = new Set();
console.log(companies)

//Create a set containing 0 to 10 using loop

const numbers = [0,1,2,3,4,5,6,7,8,9,10]
setOfNumbers = new Set();
for (const num of numbers) {
    setOfNumbers.add(num)
}

//Remove an element from a set

const numbers = [0,1,2,3,4,5,6,7,8,9,10];
const setOfNumbers = new Set(numbers);
setOfNumbers.delete(3);
console.log(setOfNumbers)

// Clear a set

const numbers = [0,1,2,3,4,5,6,7,8,9,10];
const setOfNumbers = new Set(numbers);
setOfNumbers.clear();
console.log(setOfNumbers)

// Create a set of 5 string elements from array

const names = ['Muna', 'Adan','Marcus','Moe', 'Reema'];
const setOfNames = new Set(names);
console.log(setOfNames)

// Create a map of countries and number of characters of a country

countries = [
    ['Finland', 7],
    ['Sweden', 6],
    ['Norway', 6],
  ];

  const map = new Map(countries);
  console.log(map);
  console.log(map.size);