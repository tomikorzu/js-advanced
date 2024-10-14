console.log("Prototypes");
console.log("Vehicle System Exercise");

/*
    @Constructs vehicle
    @returns {object} vehicle
*/

function Vehicle(mark, model, maxSpeed) {
  this.mark = mark;
  this.model = model;
  this.maxSpeed = maxSpeed;
}

Vehicle.prototype.accelerate = function () {
  return "Accelerating";
};

Vehicle.prototype.stop = function () {
  return "Stopping";
};

Vehicle.prototype.showInfo = function () {
  return `The mark is ${this.mark}, the model: ${this.model} and the max speed is: ${this.maxSpeed}`;
};

/*
    @Constructs car
    hereditary from vehicle
    returns {Object} car
*/

function Car(mark, model, maxSpeed) {
  Vehicle.call(this, mark, model, maxSpeed);

  Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

  Car.prototype.openDoors = function () {
    return "Opening doors";
  };
}

/*
    @Constructs Moto
    hereditary from vehicle
    returns {Object} moto
*/

function Moto(mark, model, maxSpeed) {
  Vehicle.call(this, mark, model, maxSpeed);

  Object.setPrototypeOf(Moto.prototype, Vehicle.prototype);

    Moto.prototype.showSideCar = function() {
        return "Showing sidecar";
    }
}
