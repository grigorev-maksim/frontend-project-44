import { getRandom, isPrime } from '../utils.js';

export const game = () => {
  const randomNumber = getRandom();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { description };
