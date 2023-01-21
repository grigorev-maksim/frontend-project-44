const game = () => {
  let randomNumber1 = Math.floor(Math.random() * 100) + 1;
  let randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const question = `${randomNumber1} ${randomNumber2}`;
  while (randomNumber2) {
    const t = randomNumber2;
    randomNumber2 = randomNumber1 % randomNumber2;
    randomNumber1 = t;
  }
  return [question, String(randomNumber1)];
};

export default game;
