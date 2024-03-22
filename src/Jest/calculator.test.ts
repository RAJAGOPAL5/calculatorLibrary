// src/Jest/calculator.test.ts

import { add, subtract, multiply, divide } from '../calculator';

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

  test('Safe Division', () => {
    expect(() => divide(10, 0)).toThrowError('Division by zero is not allowed.');
  });
});