// Calculator interface
interface Calculator {
    sum(a: number, b: number): number;
}

// function that implements the Calculator interface
const myCalculator: Calculator = {
    sum: (a: number, b: number): number => {
        return a + b;
    }
}

// testing myCalculator.sum
console.log(myCalculator.sum(1, 2)) // output: 3
console.log(myCalculator.sum(3, 5)) // output: 8
console.log(myCalculator.sum(6, 4)) // output: 10

// function that accepts an object that implements the
// Calculator interface and uses its sum method to perform
// an operation
const multiplySumByTwo = (calculator: Calculator, a: number, b: number): number => {
    return 2 * calculator.sum(a, b);
}

// test multiplySumByTwo function
console.log(multiplySumByTwo(myCalculator, 4, 5)) // output: 18
console.log(multiplySumByTwo(myCalculator, 4, 6)) // output: 20