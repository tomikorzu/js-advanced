# Ejercicio: Simulación de Descargas de Archivos

## Contexto

Estás desarrollando una aplicación para gestionar descargas de archivos. Cada archivo puede tardar un tiempo variable en descargarse debido a factores como el tamaño del archivo y la velocidad de la conexión. En algunos casos, las descargas pueden fallar debido a problemas de red. Tu tarea es simular estas descargas utilizando promesas y proporcionar diferentes tipos de reportes basados en las funciones `Promise.all`, `Promise.allSettled`, `Promise.any`, y `Promise.race`.

## Requerimientos

1. **Clase FileDownload**:
    - Implementa una clase llamada `FileDownload` que simule la descarga de un archivo.
    - Cada instancia de `FileDownload` tendrá un nombre y un tamaño (en MB).
    - El tiempo de descarga será simulado usando `setTimeout`, y dependerá del tamaño del archivo.
    - Usa las promesas `Promise.all`, `Promise.allSettled`, `Promise.any`, y `Promise.race` para generar diferentes resultados de las descargas.

## Tareas

1. **Crear la clase FileDownload**:
    - La clase debe tener un constructor que acepte un nombre y un tamaño de archivo.
    - Debe tener un método `download()` que simule la descarga del archivo, devolviendo una promesa que se resuelva cuando la descarga haya finalizado.

2. **Simular varias descargas**:
    - Instancia varios archivos y haz que empiecen la descarga al mismo tiempo.
    - Implementa lo siguiente:
        - `Promise.all`: Verifica cuánto tiempo toman todos los archivos en descargarse exitosamente.
        - `Promise.allSettled`: Ve cuáles descargas se completaron y cuáles fallaron.
        - `Promise.any`: Muestra cuál archivo se descargó primero exitosamente.
        - `Promise.race`: Muestra el primer archivo que terminó de descargarse o falló.

3. **Simular fallos en las descargas**:
    - Simula que algunas descargas pueden fallar debido a problemas de conexión (rechazar la promesa).

## Objetivo del ejercicio

- Practicar el uso de promesas en JavaScript, especialmente las funciones de promesas avanzadas.
- Entender las diferencias entre `Promise.all`, `Promise.allSettled`, `Promise.any`, y `Promise.race`.
- Crear y manipular clases.
- Simular condiciones reales (como tiempos de descarga variables y fallos) para trabajar con concurrencia en JavaScript.

