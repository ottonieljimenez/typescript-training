// Shape abstract class
abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
}

// Circle class
class Circle extends Shape {
    constructor(public radius: number) {
        super()
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Rectangle class
class Rectangle extends Shape {
    constructor(public width: number, public length: number) {
        super()
    }

    area(): number {
        return this.width * this.length;
    }

    perimeter(): number {
        return 2 * (this.length + this.width)
    }
}

// test Circle class
const circle = new Circle(5);
console.log(`Circle area is ${(circle.area()).toFixed(2)}.`); // output: Circle area is 78.54.
console.log(`Circle perimeter is ${(circle.perimeter()).toFixed(2)}.`); // output: Circle perimeter is 31.42.

// test Rectangle class
const rectangle = new Rectangle(3, 7);
console.log(`Rectangle area is ${rectangle.area()}.`); // output: Rectangle area is 21.
console.log(`Rectangle perimeter is ${rectangle.perimeter()}.`); // output: Rectangle perimeter is 20.
