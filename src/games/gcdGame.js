import { getRandom } from '../utils.js';

const getGcd = (num1, num2) => {
  if (num2 > num1) {
    return getGcd(num2, num1);
  }
  if (!num2) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export const game = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const question = `${randomNumber1} ${randomNumber2}`;
  return [question, String(getGcd(randomNumber1, randomNumber2))];
};

const description = 'Find the greatest common divisor of given numbers.';

export { description };
