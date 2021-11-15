let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Please enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;

let guess = parseInt(prompt("Enter your first guess!"));
while (parseInt(guess) !== targetNum) {
  if (guess == "q") break;
  attempts++;
  if (guess > targetNum) {
    prompt("Too high!");
  } else {
    prompt("Too low!");
  }
}
if (guess === "q") {
  console.log(Quitting);
} else {
  console.log(`You got it! It took you $(attempts) attempts`);
}
