const re = /[a-zA-Z]/im;

const randCase = (letter) => {
  return Math.random() < 0.5
    ? letter.toUpperCase()
    : letter.toLowerCase();
};

export const stringbobify = (str) => {
  return str
  .split("")
  .map((letter) => (letter.match(re) ? randCase(letter) : letter))
  .join("");
};
