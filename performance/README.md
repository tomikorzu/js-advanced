# Performance

## Objetivo

1. [Medición de Tiempos](#medición-de-tiempos)
2. [Comparación de Ciclos](#comparación-de-ciclos)
3. [Uso de Variables](#uso-de-variables)
4. [Optimización de Código](#optimización-de-código)

## Medición de Tiempos

Para la medición de tiempos se puede utilizar `console.time` (leer documentación).

```javascript
console.time("for loop");
// Código del ciclo for
console.timeEnd("for loop");
```

## Comparación de Ciclos

Implementar un ciclo `for`, un ciclo `while` y un ciclo `forEach` que iteren sobre una lista de 1,000,000 elementos. Medir el tiempo de ejecución de cada uno y compáralos. ¿Qué ciclo es más rápido y por qué?

## Uso de Variables

Crear dos versiones de una función que realice una operación matemática simple 1,000,000 veces: una donde utilices variables locales y otra donde utilices variables globales. Medir el tiempo de ejecución de cada versión. ¿Cuál es más eficiente en términos de tiempo y por qué?

## Optimización de Código

Escribir una función que use concatenación de cadenas con el operador `+` y otra que use plantillas de cadena (template literals) en una operación repetitiva. Medir el tiempo de ejecución de ambas versiones. ¿Cuál es más rápida y cómo influye la cantidad de operaciones en el rendimiento?
