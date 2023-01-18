const game = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let correctAnswer;
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [randomNumber, correctAnswer];
};

export default game;
