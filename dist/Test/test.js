"use strict";
// Test/test.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDivide = void 0;
const index_1 = require("../index");
// import { safeDivide } from "../Test/test"
function safeDivide(a, b) {
    try {
        return (0, index_1.divide)(a, b);
    }
    catch (error) {
        console.error("Error:", error.message);
        return Number.NaN;
    }
}
exports.safeDivide = safeDivide;
// export function safeDivide(a: number, b: number): number {
//   if (b === 0) {
//     console.error("Error: Division by zero is not allowed.");
//     return Number.NaN;
//   }
//   return divide(a, b);
// }
console.log("Addition:", (0, index_1.add)(5, 3));
console.log("Subtraction:", (0, index_1.subtract)(10, 4));
console.log("Multiplication:", (0, index_1.multiply)(2, 6));
console.log("Safe Division ", safeDivide(5, 2));
console.log("Safe Division (10 / 0):", safeDivide(10, 0));
//# sourceMappingURL=test.js.map