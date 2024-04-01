// Car class
class Car {
    constructor(public brand: string, public model: string, public price: number) {}

    // method to calculate the car price with tax included
    priceWithTax() {
        return this.price * 1.15;
    }

    showInformation() {
        console.log('Car information:');
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Price (USD): ${this.price}`);
        console.log(`Price with tax (USD): ${this.priceWithTax()}\n`)
    }
}

// create instances of the Car class
const firstCar = new Car("Toyota", "Hilux", 30000)
firstCar.showInformation();

const secondCar = new Car("Suzuki", "Swift Dzire", 15000)
secondCar.showInformation();