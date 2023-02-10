import { getRandom, isEven } from '../utils.js';

export const game = () => {
  const randomNumber = getRandom();
  let correctAnswer;
  if (isEven(randomNumber)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [randomNumber, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export { description };
