# Exercise: Vehicle System

## Objective: Create a class system for different types of vehicles using prototypes. They must implement a hierarchy of vehicles and add methods through prototyping.

### Create the base Vehicle prototype:

- The Vehicle constructor must receive the following parameters:
  1. mark (string)
  2. model (string)
  3. maximum speed (number)
- Methods:
  1. accelerate(speed): Increases the speed of the vehicle.
  2. stop(): Stops the vehicle (speed = 0).
  3. showInfo(): Displays vehicle information (make, model, maximum speed).

### Create a Car prototype that inherits from Vehicle:

- The Car builder must receive, in addition to the Vehicle parameters, the number of doors (doors).
- Methods:
  1.  openDoors(): Displays a message indicating that the doors are open.

### Create a Motorcycle prototype that inherits from Vehicle:

- The Motorcycle builder must receive, in addition to the Vehicle parameters, whether or not it has a sidecar.
- Methods:
  1. showSidecar(): Shows whether or not the motorcycle has a sidecar.
- Evidence:
- Instantiate various Auto and Moto objects, display their information, and use inherited methods.
- Make vehicles "speed up" and "stop."
- Implement a compareSpeed(otherVehicle) method on Vehicle that compares the maximum speed between two vehicles and returns which one is faster.
- Commit and upload to github. The neatness of the commits will be evaluated.
