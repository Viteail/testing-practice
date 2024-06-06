import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("first letter to be capitalized", () =>
  expect(capitalize("pula")).toBe("Pula"));

test("string to be reversed", () => expect(reverseString("hui")).toBe("iuh"));

test("numbers to be added", () => expect(calculator.add(5, 4)).toBe(9));

test("numbers to be subtracted", () =>
  expect(calculator.subtract(5, 4)).toBe(1));

test("numbers to be divided", () => expect(calculator.divide(10, 2)).toBe(5));

test("numbers to be multiplied", () =>
  expect(calculator.multiply(5, 4)).toBe(20));

test("string to be shifted by 3", () =>
  expect(caesarCipher("iblan", 3)).toBe("leodq"));

test("shifted lettercase to be the same", () =>
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"));

test("Punctuations, spaces, and other non-alphabetical characters should remain unchanged", () =>
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));

test("return an object with average, min, max and length", () => {
  const res = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(res);
});
