# Exercise: Simulation of files download

## Context

You are developing an application to manage file downloads. Each file can take a variable amount of time to download due to factors such as file size and connection speed. In some cases, downloads may fail due to network issues. Your task is to simulate these downloads using promises and provide different types of reports based on the functions `Promise.all`, `Promise.allSettled`, `Promise.any`, and `Promise.race`.

## Requirements

1. **FileDownload Class**:
    - Implement a class called `FileDownload` that simulates the download of a file.
    - Each instance of `FileDownload` will have a name and a size (in MB).
    - The download time will be simulated using `setTimeout`, and will depend on the size of the file.
    - Use the promises `Promise.all`, `Promise.allSettled`, `Promise.any`, and `Promise.race` to generate different download results.

## Tasks

1. **Create the FileDownload class**:
    - The class should have a constructor that accepts a file name and size.
    - It should have a `download()` method that simulates the file download, returning a promise that resolves when the download is complete.

2. **Simulate multiple downloads**:
    - Instantiate several files and start their downloads simultaneously.
    - Implement the following:
        - `Promise.all`: Check how long it takes for all files to download successfully.
        - `Promise.allSettled`: See which downloads completed and which failed.
        - `Promise.any`: Show which file downloaded successfully first.
        - `Promise.race`: Show the first file that finished downloading or failed.

3. **Simulate download failures**:
    - Simulate that some downloads may fail due to connection issues (reject the promise).

## Exercise Objective

- Practice using promises in JavaScript, especially advanced promise functions.
- Understand the differences between `Promise.all`, `Promise.allSettled`, `Promise.any`, and `Promise.race`.
- Create and manipulate classes.
- Simulate real conditions (such as variable download times and failures) to work with concurrency in JavaScript.

