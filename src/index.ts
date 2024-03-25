// src/index.ts
// export { add, subtract, multiply, divide,  } from './calculator';
// index.ts
export function add(x: number, y: number): number {
  return x + y;
}

export function subtract(x: number, y: number): number {
  return x - y;
}

export function multiply(x: number, y: number): number {
  return x * y;
}

export function divide(x: number, y: number): number {
  return x / y;
}

// This is the part that might throw an error
// export function safeDivide(x: number, y: number): number {
// //   if (y === 0) {
// //     throw new Error("Division by zero is not allowed.");
// //   }
//   return x / y;
// }
