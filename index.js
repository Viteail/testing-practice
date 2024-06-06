export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const reverseString = (str) => str.split("").reverse().join("");

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export const caesarCipher = (str, shift) => {
  let chars = str.split("");

  chars = chars.map((c) => {
    if (/[a-zA-Z]/.test(c)) return String.fromCharCode(c.charCodeAt() + shift);
    else return c;
  });

  return chars.join("");
};

export const analyzeArray = (arr) => {
  let average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
  let min = arr.sort((a, b) => a - b)[0];
  let max = arr[arr.length - 1];
  let length = arr.length;

  return { average, min, max, length };
};
