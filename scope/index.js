// Exercise 1
console.log("Exercise 1");

const globalVar1 = "I am a global variable";

const functionVar = () => {
  if (typeof globalVar === toString) {
    const blockVar = 5;
    console.log("The global var type is string");
  } else {
    console.log(`The global vara type is ${typeof globalVar}`);
  }
  for (let blockVar = 0; blockVar < 10; blockVar++) {
    console.log(blockVar);
  }
};

functionVar();

// Closures

// examples
function hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new hero("tomas", 5);

console.log(
  `The name of the hero 1 is ${hero1.name}, and his level is ${hero1.level}`
);
let prototypeofHero1 = Object.getPrototypeOf(hero1);

console.log(prototypeofHero1);

let otherVar = 0;

let prototypeofOtherVar = otherVar.__proto__;
console.log(prototypeofOtherVar);

// Exercise 2
console.log("Exercise 2");

const namesOfTheClass = ["Tomas", "Nicolas", "Jorge"];

const functionVar2 = (paramVar) => {
  console.log(`The received parameter is ${paramVar}`);
};

functionVar2("Hello");
