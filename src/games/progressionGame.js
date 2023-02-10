import { getRandom } from '../utils.js';

const getProgression = (number, step) => {
  const progression = [];
  for (let i = 0; i < step * 10; i += step) {
    progression.push(number + i);
  }
  return progression;
};

export const game = () => {
  const number = getRandom();
  const step = Math.floor(Math.random() * 10) + 1;
  const indexOfSpace = Math.floor(Math.random() * 10);
  const progression = getProgression(number, step);
  const correctAnswer = progression[indexOfSpace];
  progression[indexOfSpace] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const description = 'What number is missing in the progression?';

export { description };
