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

// excercise1();

const exercise2 = () => {
  console.log("Exercise 2");

  const users = [
    {
      id: 1,
      lastTime: new Date("October 18, 2024 09:42:00"),
    },
    {
      id: 2,
      lastTime: new Date("October 17, 2024 09:14:00"),
    },
    {
      id: 3,
      lastTime: new Date("October 18, 2024 09:14:00"),
    },
  ];

  const userLoggedInInLast30Minutes = (users) => {
    return users.some((user) => {
      const now = new Date();
      const diff = now - user.lastTime;
      const diffInMinutes = diff / 1000 / 60;
      return diffInMinutes <= 30;
    });
  };
  console.log(userLoggedInInLast30Minutes(users));
  console.log(
    `${kleur.yellow(
      "Explicacion:"
    )} se crea la funcion userLoggedInInLast30Minutes, que recibe un array de usuarios, y devuelve true si alguno de los usuarios se logueo en los ultimos 30 minutos, para esto se compara la fecha actual con la fecha del usuario, se calcula la diferencia en minutos y se compara si es menor o igual a 30`
  );
};

// exercise2();

const exercise3 = () => {
  console.log("Exercise 3");
  const areAnagrams = (string1, string2) => {
    const word1 = string1.trim().toLowerCase();
    const word2 = string2.trim().toLowerCase();
    const wordsLetters = [...word1, ...word2];
    const letters = {};
    wordsLetters.forEach((letter) => {
      if (letters[letter]) letters[letter] += 1;
      else letters[letter] = 1;
    });
    console.log(letters);

    for (const letter in letters) {
      if (letters[letter] !== 2) return false;
    }
    return true;
  };
  console.log(areAnagrams("Listen", "silenT"));
  console.log(
    `${kleur.yellow(
      "Explicacion:"
    )} se crea la funcion areAnagrams, que recibe dos strings, se eliminan los espacios y se convierten a minusculas, se unen los dos strings y se crea un objeto que tiene la cantidad de veces que aparece cada letra, despues se recorre el objeto y se checkea si la cantidad de veces que aparece cada letra es 2, si no es 2, devuelve false, si todas las letras aparecen 2 veces, se devuekve true`
  );
};
// exercise3();

const exercise4 = () => {
  console.log("Exercise 4");

  const generateSecurePassword = (num) => {
    if (num < 4) {
      console.log(
        kleur.red(
          "Error: The quantity length of the password must be more than 4"
        )
      );

      return;
    }
    const mayusLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const specials = "!@#$%^&*_-";
    const diccionary = [
      ...mayusLetters,
      ...minusLetters,
      ...numbers,
      ...specials,
    ];
    let randomPassword = "";
    for (let i = 0; i < num; i++) {
      const randomLetter =
        diccionary[Math.floor(Math.random() * diccionary.length)];

      randomPassword += randomLetter;
    }
    const verifyPasswordContainsMayus = randomPassword
      .split("")
      .some((letter) => {
        return mayusLetters.includes(letter);
      });
    const verifyPasswordContainsMinus = randomPassword
      .split("")
      .some((letter) => {
        return minusLetters.includes(letter);
      });
    const verifyPasswordContainsNumbers = randomPassword
      .split("")
      .some((letter) => {
        return numbers.includes(letter);
      });

    const verifyPasswordContainsSpecials = randomPassword
      .split("")
      .some((letter) => {
        return specials.includes(letter);
      });

    if (
      !verifyPasswordContainsMayus ||
      !verifyPasswordContainsMinus ||
      !verifyPasswordContainsNumbers ||
      !verifyPasswordContainsSpecials
    ) {
      return generateSecurePassword(num);
    } else {
      return randomPassword;
    }
  };

  console.log(kleur.blue("Password: ") + generateSecurePassword(4));
  console.log(
    `${kleur.yellow(
      "Explicacion:"
    )} se crea la funcion generateSecurePassword, que recibe un numero, el cual no puede ser menor de 0 y luego se crea un diccionario a mano, donde se guardan las letras, numeros y simbolos que se van a poder usar como contrasña, luego se crea la variable randomPassword, la cual empieza vacia, pero luego se le agregan letras random del diccionario, hasta llegar a la cantidad que se paso como parametro y por ultimo, se verifica que la randomPassword tenga como minimo alguna mayus, minus, numero, simbolo para asi devolver la contraseña, en el caso que no se cumpla, se vuelve a llamar a la funcion generatePAssword`
  );
};
// exercise4();
