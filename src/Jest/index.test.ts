import { add, subtract, multiply, divide } from "../index";

test("Addition (2 + 3)", () => {
  expect(add(2, 3)).toBe(5);
});

test("Subtraction (10 - 4)", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("Multiplication (2 * 6)", () => {
  expect(multiply(2, 6)).toBe(12);
});

test("Division (10 / 2)", () => {
  expect(divide(10, 2)).toBe(5);
});


