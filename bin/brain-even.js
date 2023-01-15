#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!');
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
let result = 0;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  if (randomNumber % 2 === 0 && yourAnswer !== 'yes') {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet\`s try again, ${name}!`);
    break;
  } else if (randomNumber % 2 !== 0 && yourAnswer !== 'no') {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet\`s try again, ${name}!`);
    break;
  } else {
    console.log('Correct!');
    result += 1;
  }
}

if (result === 3) {
  console.log(`Congratulations, ${name}!`);
}
