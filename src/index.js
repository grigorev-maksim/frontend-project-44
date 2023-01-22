import readlineSync from "readline-sync";

const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const [questions, correctAnswer] = game();
    console.log(`Question: ${questions}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
