const game = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const operators = ['+', '-', '*'];
  const index = Math.round(Math.random() * 2);
  const operator = operators[index];
  let correctAnswer = 0;
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  switch (index) {
    case 0:
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case 1:
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case 2:
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      correctAnswer = 1;
  }
  return [question, String(correctAnswer)];
};

export default game;
