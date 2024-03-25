"use strict";
// Test/test.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDivide = void 0;
const index_1 = require("../index");
// export function safeDivide(a: number, b: number): number {
//   try {
//     if (b != 0) {
//       return divide(a, b);
//     } else {
//       return 0;
//     }
//   } catch (error: any) {
//     return Number.NaN;
//   }
// }
function safeDivide(a, b) {
    if (b !== 0) {
        return (0, index_1.divide)(a, b);
    }
    else {
        throw new Error("Division by zero is not allowed."); // Throw an error
    }
}
exports.safeDivide = safeDivide;
// export function safeDivide(a: number, b: number): number {
//   if (b !== 0) {
//     return divide(a, b);
//   }
//   console.error("Error: Division by zero is not allowed.");
//   return NaN;
// }
// export function safeDivide(a:number, b:number): number  {
//   try {
//     return divide(a, b);
//   } catch (error:any) {
//     console.error("Error:", error.message);
//     return Number.NaN;
//   }
// }
// console.log("Addition:", add(5, 3));
// console.log("Subtraction:", subtract(10, 4));
// console.log("Multiplication:", multiply(2, 6));
// console.log("Safe Division ", safeDivide(10, 2));
// console.log("Safe Division (10 / 0):", safeDivide(10, 0));
// import { add, subtract, multiply, divide } from "../index";
// // export function safeDivide(a: number, b: number): number {
// //   try {
// //     if (b != 0) {
// //       return divide(a, b);
// //     } else {
// //       throw new Error("Division by zero is not allowed.");
// //     }
// //   } catch (error: any) {
// //     return Number.NaN;
// //   }
// // }
// export function safeDivide(a: number, b: number): number {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   return a / b;
// }
// console.log("Addition:", add(5, 3));
// console.log("Subtraction:", subtract(10, 4));
// console.log("Multiplication:", multiply(2, 6));
// console.log("Safe Division ", safeDivide(5, 2));
// console.log("Safe Division (10 / 0):", safeDivide(10, 0));
// test("Safe Division (10 / 0) throws an error", () => {
//   expect(() => safeDivide(10, 0)).toThrow(); // Use toThrow() for generic error expectation
// });
//# sourceMappingURL=test.js.map