export const game = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = [];
  for (let i = 0; i < step * 10; i += step) {
    progression.push(number + i);
  }
  const indexOfSpace = Math.floor(Math.random() * 10);
  const newProgression = progression;
  const correctAnswer = progression[indexOfSpace];
  newProgression[indexOfSpace] = '..';
  const question = newProgression.join(' ');
  return [question, String(correctAnswer)];
};

const description = 'What number is missing in the progression?';

export { description };
