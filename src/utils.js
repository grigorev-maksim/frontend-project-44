export const getRandom = () => Math.floor(Math.random() * 100) + 1;

export const isEven = (num) => ((num % 2 === 0));

export const isPrime = (num) => {
  let correctAnswer;
  if (num === 1) {
    correctAnswer = false;
  } else if (num === 2) {
    correctAnswer = true;
  } else {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        correctAnswer = false;
        break;
      } else {
        correctAnswer = true;
      }
    }
  }
  return correctAnswer;
};
