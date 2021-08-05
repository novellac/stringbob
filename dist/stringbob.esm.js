var re = /[a-zA-Z]/im;

var randCase = function randCase(letter) {
  return Math.random() < 0.5 ? letter.toUpperCase() : letter.toLowerCase();
};

var stringbobify = function stringbobify(str) {
  return str.split("").map(function (letter) {
    return letter.match(re) ? randCase(letter) : letter;
  }).join("");
};

export { stringbobify };
