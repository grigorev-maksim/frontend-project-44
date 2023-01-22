export const game = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let correctAnswer;
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [randomNumber, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export { description };
