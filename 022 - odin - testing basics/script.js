function capitalize(string) {
  return string.toUpperCase();
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  }
};

function caesarCipher(string) {
  let charsArray = [];
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    if (char < 65 || char > 122 || (char > 90 && char < 97)) {
      charsArray.push(char);
      continue;
    }
    if (char === 90 || char === 122) {
      charsArray.push(char - 25);
    } else {
      charsArray.push(char + 1);
    }
  }
  console.log(charsArray);
  let result = "";
  charsArray.forEach(char => {
    result += String.fromCharCode(char);
  });
  return result;
}

function analyzeArray(arr) {
  const result = {
    average: null,
    min: null,
    max: null,
    length: null
  };
  result.length = arr.length;
  result.average = arr.reduce((tot, cur) => tot + cur) / result.length;
  const sorted = arr.sort((a, b) => a - b);
  result.min = sorted[0];
  result.max = sorted[sorted.length - 1];
  return result;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
};
