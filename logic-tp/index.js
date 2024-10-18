import kleur from "kleur";
const excercise1 = () => {
  console.log("Exercise 1");
  const sum = (n1, n2) => {
    if (typeof n1 !== "number" && typeof n2 !== "number")
      return "Both parameters are not numbers";
    else if (typeof n1 !== "number") return "First parameter is not a number";
    else if (typeof n2 !== "number") return "Second parameter is not a number";
    else return n1 + n2;
  };
  console.log(sum(1, 2));
  console.log(sum(1, "2"));
  console.log(sum("1", 2));
  console.log(sum("1", "2"));
  console.log(
    `${kleur.yellow(
      "Explicacion:"
    )} se crea la funcion sum, que recibe dos parametros y compara su tipo de dato antes de devolver la suma, en el caso que los 2 parametros no sean numeros, devuelve un mensaje que los 2 parametros no son numeros, si solo uno es un numero, devuelve que el primer o segundo parametro no es un numero, y si ambos son numeros, devuelve la suma`
  );
};

excercise1();

const exercise2 = () => {
  console.log("Exercise 2");
};

exercise2();
