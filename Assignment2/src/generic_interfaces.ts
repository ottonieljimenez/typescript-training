// generic Container interface
interface Container<T> {
    value: T[];
}

// Box class that implements the Container interface
class Box<T> implements Container<T> {
    value: T[];

    constructor(initialValues: T[] = []) {
        this.value = initialValues;
    }

    // method to add elements to the container
    addElements(...newValues: T[]): void {
        this.value.push(...newValues);
    }

    // method to get an element by index
    getElement(index: number): T {
        return this.value[index]
    }

    // method to show all the elements in the Container
    showElements(): void {
        console.log(this.value);
    }
}

// create instances of the Box class

// test with numbers
console.log('Test with numbers:')

// initialize numberBox
const numberBox = new Box<number>([1, 2, 3]);
// add elements to the numberBox
numberBox.addElements(4, 5, 6);
// display elements of the numberBox
numberBox.showElements();
// get element by index
console.log(numberBox.getElement(2)); // expected output: 3

// test with strings
console.log('\nTest with strings:')

// initialize stringBox
const stringBox = new Box<string>(["Mario", "Ottoniel"]);
// add elements to the stringBox
stringBox.addElements("Mayra", "Juan");
// display elements of the stringBox
stringBox.showElements();
// get element by index
console.log(stringBox.getElement(3)); // expected output: Juan

// test with objects
console.log('\nTest with objects:')
// initialize objectBox
const objectBox = new Box<object>([{ color: "red" }, { size: "small" }]);
// add elements to the objectBox
objectBox.addElements({ brand: "Levi" });
// display elements of the objectBox
objectBox.showElements();
// get element by index
console.log(objectBox.getElement(0)); // expected output: { color: 'red' }