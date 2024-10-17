console.log("Performance");

const example1 = () => {
  const t0 = performance.now();
  doSomething();
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

  function doSomething() {
    for (let i = 0; i < 1000000; i++) {
      console.log(i);
    }
  }
};
// example1();

const example2 = () => {
  console.time("doSomething");
  doSomething();
  console.timeEnd("doSomething");
  function doSomething() {
    for (let i = 0; i < 1000000; i++) {
      console.log(i);
    }
  }
};
// example2();

console.time("For Loop");

// forCicle();
// forEachCicle();
// whileCicle();

console.timeEnd("For Loop");

function forCicle() {
  let sum = 0;
  let i = 0;
  for (i = 0; i < 1000000; i++) {
    sum += i;
  }
  console.log("ForCicle");
}

// ForClicle 5.437s

function forEachCicle() {
  let sum = 0;
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  array.forEach((element) => {
    sum += element;
  });
  console.log("ForEachCicle");
}

// ForEachCicle 89.785s

function whileCicle() {
  let sum = 0;
  let i = 0;
  while (i < 1000000) {
    sum += i;
    i++;
  }
  console.log("WhileCicle");
}

// WhileCicle 5.282s

// Los ciclos que son mas rapidos son for y while, tardando casi lo mismo, a diferencia del forEach, que trada 10 veces mas que los otros dos, esto se debe a que este es un metodo de arrays que tiene que recorrerlo y ejecutar una funcion por cada elemento, mientras que los otros dos solo tienen que hacer una comparacion y una suma.

console.log("Using variables");

let sum1 = 0;

console.time("For Loop");

// forGlobal();
forLocal();

console.timeEnd("For Loop");

function forGlobal() {
  for (let i = 0; i < 1000000; i++) {
    sum1 += i;
  }
  console.log("ForGlobal");
}

// ForGlobal 20s

function forLocal() {
  let sum2 = 0;
  for (let i = 0; i < 1000000; i++) {
    sum2 += i;
  }
  console.log("ForLocal");
}

// ForLocal 5.5s

// Tarda mas la variable global porque tiene que salir al scope generar, bucar la variable y sumarle, miemtras que la local, solo tiene que buscarla en el mismo scope y sumarle.

console.log("Optimization of code");

console.time("For Loop");

// stringConcatenation();
templateLiterals();

console.timeEnd("For Loop");

function stringConcatenation() {
  let word = "";
  for (let i = 0; i < 1000000; i++) {
    word = "Word " + i;
  }
  console.log("StringConcatenation");
}

// StringConcatenation 104.5s

function templateLiterals() {
  let word = "";
  for (let i = 0; i < 1000000; i++) {
    word = `Word ${i}`;
  }
  console.log("TemplateLiterals");
}
// TemplateLiterals 70.5s

// No se por que una es mas rapida que la otra
