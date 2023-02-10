import { getRandom } from '../utils.js';

const getCorrectAnswer = (num1, operator, num2) => {
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = 1;
  }
  return correctAnswer;
};

export const game = () => {
  const randomNumber1 = getRandom();
  const randomNumber2 = getRandom();
  const operators = ['+', '-', '*'];
  const index = Math.round(Math.random() * 2);
  const operator = operators[index];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = getCorrectAnswer(randomNumber1, operator, randomNumber2);
  return [question, String(correctAnswer)];
};

const description = 'What is the result of the expression?';

export { description };
