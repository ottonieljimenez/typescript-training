// Numbers and math operations

function sum(a: number, b: number): number {
    return a + b;
}

const sum1: number = sum(1, 3);
console.log(sum1); // output: 4

const sum2: number = sum(5, -2);
console.log(sum2); // output: 3

// Strings and concatenation

function concatenateStrings(str1: string, str2: string): string {
    return str1.concat(str2);
}

const str1: string = "My name is ";
const str2: string = "Otto!";

const resultingString: string = concatenateStrings(str1, str2);
console.log(resultingString); // output: My name is Otto!

// Booleans and Logic

function isEvenNumber(x: number): boolean {
    return x % 2 == 0;
}

const num1: number = 16;
const num2: number = 13;

const isFirstNumberEven: boolean = isEvenNumber(num1);
const isSecondNumberEven: boolean = isEvenNumber(num2);

console.log(isFirstNumberEven) // output: true
console.log(isSecondNumberEven) // output: false

// Arrays and array manipulation

function arrayElementsSum(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

const numbersArray: number[] = [5, 6, 7, 8, 9];
const sumOfArrayElements: number = arrayElementsSum(numbersArray);

console.log(sumOfArrayElements); // output: 35

// Tuples and access to them

// distance of a coordinate from the origin (0, 0)
function distanceFromOrigin(coordinate: [number, number]): number {
    return (coordinate[0] * coordinate[0] + coordinate[1] * coordinate[1]) ** (1/2);
}

// tuple representing the (2,3) point in the x-y coordinate system
const coordinate: [number, number] = [4, 3];

const coordinateDistanceFromOrigin: number = distanceFromOrigin(coordinate);
console.log(coordinateDistanceFromOrigin); // output: 5