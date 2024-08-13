var Car = /** @class */ (function () {
    function Car(_a) {
        var make = _a.make, model = _a.model, year = _a.year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var car_details = {
    make: "Toyote",
    model: "V8 Engine (1)",
    year: 2003
};
var new_car = new Car(car_details);
new_car.start();
