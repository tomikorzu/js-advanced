console.log("Race Conditions");

console.log("Platform of sell tickets online");

let totalTicketsAvailable = 10;

let users = [];
const totalUsers = Math.floor(Math.random() * 10 + 10);
for (let i = 1; i < totalUsers; i++) {
  users.push(i);
}
console.log(`Total users: ${users.length}`);

let lock = false;




