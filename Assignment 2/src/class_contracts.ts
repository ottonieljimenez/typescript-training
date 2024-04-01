// Animal interface
interface Animal {
    eat(): void;
    sleep(): void;
    type: string;
}

// Dog class
class Dog implements Animal {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    eat(): void {
        console.log('Dog is eating!');
    }

    sleep(): void {
        console.log('Dog is sleeping!');
    }
}


// Cat class
class Cat implements Animal {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    eat(): void {
        console.log('Cat is eating!');
    }

    sleep(): void {
        console.log('Cat is sleeping!');
    }
}

// create instances of Dog and Cat classes
const dog = new Dog("Canine")
const cat = new Cat("Feline")

// call dog methods
dog.eat(); // output: Dog is eating!
dog.sleep(); // output: Dog is sleeping!

// call cat methods
cat.eat() // output: Cat is eating!
cat.sleep() // output: Cat is sleeping!