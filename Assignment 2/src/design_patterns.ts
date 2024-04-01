// SINGLETON DESIGN PATTERN
class Logger {
    private static instance: Logger;

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    logEvent(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}

// verify use of the Logger
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

// Check that objects are the same instance
console.log(logger1 == logger2) // output: true

// Event registering with the Logger
logger1.logEvent("New user signed up");
logger2.logEvent("User signed out");

// FACTORY DESIGN PATTERN
interface Vehicle {
    operation(): string;
}

class Truck implements Vehicle {
    operation() {
        return "Truck created";
    }
}

class Bike implements Vehicle {
    operation() {
        return "Bike created";
    }
}

class Factory {
    createVehicle(type: string): Vehicle {
        if (type == "Truck") {
            return new Truck();
        } else if (type == "Bike") {
            return new Bike();
        } else {
            throw new Error("Invalid product type");
        }
    }
}

const factory = new Factory();

// create a truck
const truck = factory.createVehicle("Truck");
console.log(truck.operation()); // Output: Truck created

// create a bike
const bike = factory.createVehicle("Bike");
console.log(bike.operation()); // Output: Bike created

// OBSERVER PATTERN

interface Observer {
    update(data: any): void;
}

// Subject class to be observed
class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

// class that will act as an observer
class DataObserver implements Observer {
    update(data: any): void {
        console.log(`DataObserver: A new change has been made. New data: ${data}`);
    }
}

// test Observer pattern
const subject = new Subject();

// create an observer
const observer = new DataObserver();

// add observer to the subject
subject.addObserver(observer);

// notify the observers once when is a data change
subject.notifyObservers("New testing data set");

// delete the observer after notification
subject.removeObserver(observer);

// if we notify again, the recently-removed observer will not be notified
subject.notifyObservers("Another data set");