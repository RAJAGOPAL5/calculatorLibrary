// src/Jest/calculator.test.ts

import { add, subtract, multiply, divide } from '../calculator';

// Define the safeDivide function within the test file
function safeDivide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return divide(a, b);
}

describe('Calculator Tests', () => {

  test('Addition', () => {
    expect(add(5, 3)).toBe(8);
  });

  test('Subtraction', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('Multiplication', () => {
    expect(multiply(2, 6)).toBe(12);
  });

  test('Division', () => {
    expect(divide(8, 2)).toBe(4);
  });

  test('Safe Division (5 / 2)', () => {
    expect(safeDivide(5, 2)).toBe(2.5);
  });

  test('Safe Division (10 / 0)', () => {
    try {
      safeDivide(10, 0);
      fail('Expected safeDivide to throw an error');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);

    }
  });
});












