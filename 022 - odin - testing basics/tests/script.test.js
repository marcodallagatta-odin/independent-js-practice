const myFun = require("../script");

// A capitalize function that takes a string and returns it with the first character capitalized.
test("capitalize", () => {
  expect(myFun.capitalize("abc")).toBe("ABC");
});

// A reverseString function that takes a string and returns it reversed.
test("reverse string", () => {
  expect(myFun.reverseString("abc")).toBe("cba");
});

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
test("calculator", () => {
  expect(myFun.calculator.add(10, 5)).toBe(15);
  expect(myFun.calculator.subtract(10, 5)).toBe(5);
  expect(myFun.calculator.divide(10, 5)).toBe(2);
  expect(myFun.calculator.multiply(10, 5)).toBe(50);
});

// A caesarCipher function that takes a string and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.
// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
test("caesarCipher", () => {
  expect(myFun.caesarCipher("Marco")).toBe("Nbsdp");
  expect(myFun.caesarCipher("aBcz")).toBe("bCda");
  expect(myFun.caesarCipher("me,Lord")).toBe("nf,Mpse");
});

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
test("statistical analysis", () => {
  expect(myFun.analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    length: 6,
    max: 8,
    min: 1
  });
});