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

  Moto.prototype.showSideCar = function () {
    return "Showing sidecar";
  };
}

/*
    @Testing
*/
function testing() {
  console.log("Testing...");
  const car1 = new Car("Toyota", "Corolla", 200);
  const car2 = new Car("Chevrolet", "Camaro", 250);
  const moto1 = new Moto("Yamaha", "R1", 300);
  const moto2 = new Moto("Kawasaki", "Ninja", 350);

  console.log(" ");

  console.log(car1.model);
  console.log(car1.accelerate());
  console.log(car1.stop());

  console.log(" ");

  console.log(car2.model);
  console.log(car2.accelerate());
  console.log(car2.stop());

  console.log(" ");

  console.log(moto1.model);
  console.log(moto1.accelerate());
  console.log(moto1.stop());

  console.log(" ");

  console.log(moto2.model);
  console.log(moto2.accelerate());
  console.log(moto2.stop());
}

// testing();

function compareSpeed() {
  console.log("Comparing speed...");
  const car = new Car("Chevrolet", "Camaro", 250);
  const moto = new Moto("Kawasaki", "Ninja", 350);
  console.log(" ");
  return car.maxSpeed > moto.maxSpeed
    ? console.log(`The car is faster than the moto`)
    : console.log(`The moto is faster than the car`);
}
// compareSpeed()
