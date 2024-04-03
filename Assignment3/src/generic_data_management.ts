// Generic DataStore<T> class
class DataStore<T> {
    values: T[];

    constructor(values: T[] = []) {
        this.values = values;
    }

    /**
     * Method that adds items to the `this.values` array
     * @param values - array of generic types
     */
    addItems(...values: T[]): void {
        this.values.push(...values);
    }

    /**
     * Method to get all items in `this.values`
     * @returns the `this.values` array
     */
    getAllItems(): T[] {
        return this.values;
    }

    /**
     * Method that gets an item from `this.values` by index
     * @param index of `this.values`' item to be returned
     * @returns `this.values`'s item corresponding to the index of interest
     */
    getItem(index: number): T {
        return this.values[index];
    }

    /**
     * Method that removes an item from `this.values` by index
     * @param index of `this.values`' item to be removed
     */
    removeItem(index: number): void {
        this.values = this.values.filter(value => value !== this.values[index]);
    }
}

// test DataStore class
const dataStore = new DataStore<number>([1, 1, 2, 3, 5]);

// show dataStore items
console.log(dataStore.getAllItems()); // output: [1, 1, 2, 3, 5]

// add elements to the dataStore
dataStore.addItems(8, 13, 21);

// show dataStore items after adding new items
console.log(dataStore.getAllItems()); // output: [1, 1, 2, 3, 5, 8, 13, 21]

// get an element by index
console.log(dataStore.getItem(4)) // output: 5

// remove an item by index
dataStore.removeItem(7)

// check items in the list after removal
console.log(dataStore.getAllItems()) // output: [1, 1, 2, 3, 5, 8, 13]