// Test/test.ts

import { add, subtract, multiply, divide } from "../index";




export function safeDivide(a: number, b: number): number {
  if (b !== 0) {
    return divide(a, b);
  } else {
    throw new Error("Division by zero is not allowed."); 
  }
}


console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(2, 6));
console.log("Safe Division ", safeDivide(10, 2));
