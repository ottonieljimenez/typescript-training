interface Itemwise {
    item: any;
}

// Generic DataStore<T> class
class DataStore<T extends Itemwise> {
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

// test with numbers
const numbersDataStore = new DataStore<{ item: number }>([{ item: 1 }, { item: 1 }, { item: 2 }, { item: 3 }, { item: 5 }]);
// show numbersDataStore items
console.log(numbersDataStore.getAllItems(), '\n');

// add elements to the numbersDataStore
numbersDataStore.addItems({ item: 8 } , { item: 13 }, { item: 21 });
// show numbersDataStore items after adding new items
console.log(numbersDataStore.getAllItems(), '\n');

// get an element by index
console.log(numbersDataStore.getItem(4), '\n') // output: { item: 5 }

// remove an item by index
numbersDataStore.removeItem(7)
// check items in the list after removal
console.log(numbersDataStore.getAllItems(), '\n')

//======================================================================================================================

// test with strings
const stringsDataStore = new DataStore<{ item: string }>([{ item: "apple" }, { item: "banana" }, { item: "orange" }]);
// show stringsDataStore items
console.log(stringsDataStore.getAllItems(), '\n');

// add elements to the stringsDataStore
stringsDataStore.addItems({ item: "mango" }, { item: "pineapple" });
// show stringsDataStore items after adding new items
console.log(stringsDataStore.getAllItems(), '\n');

// get an element by index
console.log(stringsDataStore.getItem(2), '\n') // output: { item: "orange" }

// remove an item by index
stringsDataStore.removeItem(1)
// check items in the list after removal
console.log(stringsDataStore.getAllItems(), '\n')

//======================================================================================================================

// test with objects
const objectsDataStore = new DataStore<{ item: object }>([
    { item: { name: "John", age: 30 } }, 
    { item: { name: "Jane", age: 25 } },
    { item: { name: "Joseph", age: 24 }}
]);
// show objectsDataStore items
console.log(objectsDataStore.getAllItems(), '\n');

// add elements to the objectsDataStore
objectsDataStore.addItems({ item: { name: "Bob", age: 40 } }, { item: { name: "Alice", age: 35 }});
// show objectsDataStore items after adding new items
console.log(objectsDataStore.getAllItems(), '\n');

// get an element by index
console.log(objectsDataStore.getItem(0), '\n'); // output: { item: { name: "John", age: 30 } }

// remove an item by index
objectsDataStore.removeItem(1);
// check items in the list after removal
console.log(objectsDataStore.getAllItems(), '\n');