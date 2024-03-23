// Test/test.ts

import { add, subtract, multiply, divide } from "../index"; 

// import { safeDivide } from "../Test/test"

export function safeDivide(a:number, b:number): number {

  

  try {
    return divide(a, b);
  } catch (error:any) {
    console.error("Error:", error.message);
    return Number.NaN; 
  }
}


// export function safeDivide(a: number, b: number): number {
//   if (b === 0) {
//     console.error("Error: Division by zero is not allowed.");
//     return Number.NaN;
//   }

//   return divide(a, b);
// }



console.log("Addition:", add(5, 3)); 
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(2, 6)); 
console.log("Safe Division ", safeDivide(5, 2));
console.log("Safe Division (10 / 0):", safeDivide(10, 0));

