// Vehicle interface
interface Vehicle {
    make: string,
    model: string
    year: number,
    start?: ()=> void
}

// Car Object Instance
class Car{
    constructor({make, model, year}: Vehicle){

    }

    start(){
        console.log("Car engine started")
    }
}

const car_details = {
    make: "Toyote",
    model: "V8 Engine (1)",
    year: 2003
}

const new_car = new Car(car_details)

new_car.start()