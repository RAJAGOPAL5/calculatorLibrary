// testCoverage.test.ts

import { add, subtract, multiply, divide } from "../index"; 
import { safeDivide } from "../Test/test"; 

// Test cases for calculator functions
test("Addition", () => {
  expect(add(5, 3)).toBe(8);
});

test("Subtraction", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("Multiplication", () => {
  expect(multiply(2, 6)).toBe(12);
});

test("Division", () => {
  expect(divide(10, 2)).toBe(5);
});

test("Safe Division (valid division)", () => {
  expect(safeDivide(5, 2)).toBe(2.5);
});

test("Safe Division (division by zero)", () => {
    expect(safeDivide(10, 0)).toBeNaN(); 
});




