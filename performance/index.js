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
  for (let i = 0; i < 1000000; i++) {
    console.log(i);
  }
}

// ForClicle 17.431s

function forEachCicle() {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  array.forEach((element) => {
    console.log(element);
  });
}

// ForEachCicle 17.901s

function whileCicle() {
  let i = 0;
  while (i < 1000000) {
    console.log(i);
    i++;
  }
}

// WhileCicle 17.749s
