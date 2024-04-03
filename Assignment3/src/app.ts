// Main app.ts
import { Models } from "./models";
import { Utilities } from "./utilities";

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

// test `Models.Items<T,U>` class
const product = new Models.Item<string, number>('Book', 20);
console.log(product)