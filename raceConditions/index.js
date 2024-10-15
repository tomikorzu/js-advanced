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

/*
    This function simulates a buy of a ticket with a random delay
*/
const buyATicket = async (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (totalTicketsAvailable > 0 && !lock) {
        lock = true;
        totalTicketsAvailable -= 1;
        console.log(`The user ${user} bought a ticket`);
        console.log(`Total tickets available: ${totalTicketsAvailable}`);
        lock = false;
        resolve();
      } else {
        console.log(`The user ${user} couldn't buy a ticket`);
        resolve();
      }
    }, Math.random() * 1000);
  });
};

const buyTicketsForAllUsers = async () => {
  users.forEach(async (user) => {
    await buyATicket(user);
  });
};
buyTicketsForAllUsers();
