# TP LOGICA:

## Requerimientos:
No usar librerias ni frameworks
Considerar edge cases
Considerar performance
Explicar brevemente la solucion

1. Escribir una funcion que cumpla con los siguientes casos de prueba:
   sum(1,2) => 3
   sum(1)(2) => 3
   sum(1,a) => “second parameter is not a number”
   sum(1)(a) => “second parameter is not a number”

2. Dada una lista de usuarios con su historial de logueo. Escribir una funcion que determine si algun usuario fue logueado dentro de los ultimos 30 minutos
   La funcion debe recibir un parametro:

   - `users`: un array de objetos, donde cada objeto tiene las siguientes propiedades: - `id` (integer) - `login_time` (datetime): tiempo en el cual el usuario se logueo por ultima vez en formato fecha
     La funcion debe retornar true si un usuario se logueo en los ultimos 30 minutos

3. Escribir una funcion que determine si 2 strings son un anagrama
   Ignorar espacios en los strings
   No diferenciar entre mayusculas y minusculas
   Retornar true si es anagrama y false de lo contrario

4. Escribir una funcion generadora de una contraseña segura. Debe recibir un numero y generar una contraseña de esa longitud que cumpla con las siguientes consignas:
   Al menos una mayuscula
   Al menos una minuscula
   Al menos un numero
   Al menos un caracter especial
   Debe retornar la contraseña generada
