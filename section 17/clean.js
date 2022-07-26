"use strict";
let budget = [
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
];

let limits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

let getEl = (user) => (limits[user] ? limits[user] : 0);
let addExpense = function (value, description, user = "Jonas") {
  //if (!user) user = "jonas";
  user = user.toLowerCase();

  let limit = getEl(user);

  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, "Pizza 🍕");
addExpense(100, "Going to movies 🍿", "Matilda");
addExpense(200, "Stuff", "Jay");
console.log(budget);

let check = function () {
  for (let el of budget) {
    let limit = getEl(el.user);
let arr = budget.filter((el)=>el.value<-limit)
    if (el.value < -limit) {
      el.flag = "limit";
    }
  }
};
check();

console.log(budget);

var bigExpenses = function (limit) {
  var output = "";
  for (var el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + " / "; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
limits
.sort()