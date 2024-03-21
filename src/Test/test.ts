// // src/test.ts
// import { add, subtract, multiply, divide } from "../index";

// console.log("Addition:", add(5, 3));
// console.log("Subtraction:", subtract(10, 4));
// console.log("Multiplication:", multiply(2, 6));
// console.log("Division:", divide(8, 2));


// src/test.ts
import { add, subtract, multiply, divide } from "../index"; // Assuming index.ts re-exports calculator functions

function safeDivide(a: number, b: number): number {
  // Wrapper function to handle division by zero gracefully
  try {
    return divide(a, b);
  } catch (error: any) {
    console.error("Error:", error.message);
    return Number.NaN; // Or handle the error differently (e.g., return a default value)
  }
}

console.log("Addition:", add(5, 3)); // Output: 8
console.log("Subtraction:", subtract(10, 4)); // Output: 6
console.log("Multiplication:", multiply(2, 6)); // Output: 12

console.log("Safe Division (5 / 2):", safeDivide(5, 2)); // Output: 2.5
console.log("Safe Division (10 / 0):", safeDivide(10, 0)); // Output: Error: Division by zero is not allowed.

// Alternative way to handle division by zero using optional chaining
console.log("Optional Chaining Division (8 / 0):", (8 / 0)?.toFixed(2)); // Output: NaN
