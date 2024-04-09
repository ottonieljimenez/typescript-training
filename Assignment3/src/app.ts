// Main app.ts
import { Models } from "./models/Models";
import { Utilities } from "./utilities/Utilities";

// test `Utilities.clamp()` function

// value to be clamped
const value = 90;
const minimum = 50;
const maximum = 80;

// clamp value
const clampedValue = Utilities.clamp(value, minimum, maximum);
console.log(clampedValue) // expected output: 80

// test `Utilities.shuffle()` function
const originalArray = [1, 1, 2, 3, 5, 8, 13];
const shuffledArray = Utilities.shuffleArray(originalArray);
console.log(shuffledArray);

// test `Utilities.average()` function
const numbersArray = [1, 2, 3, 4, 5];
const average = Utilities.average(numbersArray);
console.log(average); // expected output: 3.0

// test `Models.Items<T,U>` class
const product = new Models.Item<string, number>('Book', 20);
console.log(product)