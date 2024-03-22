import { add, subtract, multiply, divide } from "../index"; 

export function safeDivide(a:number, b:number): number {

  try {
    return divide(a, b);
  } catch (error:any) {
    console.error("Error:", error.message);
    return Number.NaN; 
  }
}



console.log("Addition:", add(5, 3)); 
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(2, 6)); 

console.log("Safe Division (5 / 2):", safeDivide(5, 2));
console.log("Safe Division (10 / 0):", safeDivide(10, 0));

// console.log("Optional Chaining Division (8 / 0):", (8 / 0)?.toFixed(2)); 
