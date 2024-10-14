console.log("Prototypes");
console.log("Vehicle System Exercise");

/*
    @function vehicle
    @returns {object} vehicle
*/

function Vehicle(mark, model, maxSpeed) {
  this.mark = mark;
  this.model = model;
  this.maxSpeed = maxSpeed;
}

Vehicle.prototype.accelerate = function () {
  console.log("Accelerating");
};

Vehicle.prototype.stop = function () {
  console.log("Stopping");
};

Vehicle.prototype.showInfo = function () {
  console.log(
    `The mark is ${this.mark}, the model: ${this.model} and the max speed is: ${this.maxSpeed}`
  );
};

const tiguan = new Vehicle("Volkswagen", "Tiguan", 220);
console.log(tiguan);

tiguan.accelerate();

setTimeout(() => {
  tiguan.stop();
  setTimeout(() => {
    tiguan.showInfo();
  }, 1000);
}, 1000);
