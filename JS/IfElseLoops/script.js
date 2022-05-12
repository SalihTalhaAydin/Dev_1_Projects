var isAlive = true;
var value = null;

if (isAlive) {
  console.log("It is alive!");
}

if (!value) {
  console.log("It is not null!");
}

var temperature = 50;

if (temperature > 60 && temperature <= 80) {
  console.log("Wear a short");
} else if (temperature > 80) {
  console.log("Wear a short and a hat");
} else if (temperature < 0) {
  console.log("Stay inside");
} else {
  console.log("Do whatever you want");
}

console.log(temperature > 60 ? "Put on a short" : "Put on a jacket");

// document.write(
//     prompt("Did you eat steak?").toLowerCase() === "yes"
//     ? "Here's a Steak!"
//     : "Here's a Tofu Stir-Fry!"
//     );

for (var i = 11; i < 45; i += 3) console.log(i);

for (var i = 1; i < 13; i++) console.log(9 * i);
