// Parameters and return types

function person(name: string, age: number): object {
    return {
        name: name,
        age: age
    }
}

const testName: string = "Ottoniel Jimenez";
const testAge: number = 24;

const resultingPerson: object = person(testName, testAge);

console.log(resultingPerson); // output: { name: "Ottoniel Jimenez", age: 24 }

// Arrow functions

// arrow function to square a number
const square = (num: number): number => num ** 2;

const testNumber: number = 8;
const testNumberSquared: number = square(testNumber);

console.log(testNumberSquared); // output: 64

// Nested functions

function defaultOperation(num: number): (num: number) => number {
    return function multiplyByFive(num: number): number {
        return num * 5;
    }
}

const testValue: number = 7;
const resultingFunction = defaultOperation(testValue);
console.log(resultingFunction); // output: [Function: multiplyByFive]