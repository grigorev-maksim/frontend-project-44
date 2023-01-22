export const game = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = randomNumber;
  let correctAnswer;
  if (randomNumber === 1) {
    correctAnswer = 'no';
  } else if (randomNumber === 2) {
    correctAnswer = 'yes';
  } else {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        correctAnswer = 'no';
        break;
      } else {
        correctAnswer = 'yes';
      }
    }
  }
  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { description };
