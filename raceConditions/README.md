# Introduction

In this exercise, you will simulate a ticket purchasing system to understand and resolve race conditions in a concurrent environment.
# Requirements

- There are a total of 10 tickets available.
- Multiple requests may arrive at the server simultaneously to purchase tickets.
- The system must ensure that no more than the 10 available tickets are sold.

## Tasks

1. Write a simulation in JavaScript (can be in a Node.js environment) where multiple users attempt to purchase tickets at the same time.
2. Use the `setTimeout` function to simulate concurrent requests. Each user will attempt to purchase tickets with a random delay.
3. Create a function that handles the purchase, receives the number of tickets requested, and updates the total number of available tickets.
4. Detect the problem: Observe what happens when multiple users try to purchase at the same time and how tickets can be oversold (race condition).
5. Solve the race condition: Propose and apply a solution to prevent the available tickets from being oversold. You can use one of the following strategies:
    - Use locks to ensure that only one request can process the purchase at a time.
    - Implement some form of synchronization between requests.
    - Alternatively, you can implement promises to ensure that the stock update is atomic.
