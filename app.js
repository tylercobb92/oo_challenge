class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle || Car || Motorcycle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length === this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";

    }
}

const myVehicle = new Vehicle('Mazda', '3', 2005);
const myCar = new Car('Toyota', 'Rav4', 2018);
const myMotorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 2021);
const myGarage = new Garage(2);
const myBoat = { make: "Mercury", model: "Basstracker", year: "2010" }