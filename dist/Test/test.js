"use strict";
// // src/test.ts
// import { add, subtract, multiply, divide } from "../index";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Addition:", add(5, 3));
// console.log("Subtraction:", subtract(10, 4));
// console.log("Multiplication:", multiply(2, 6));
// console.log("Division:", divide(8, 2));
// src/test.ts
var index_1 = require("../index"); // Assuming index.ts re-exports calculator functions
function safeDivide(a, b) {
    // Wrapper function to handle division by zero gracefully
    try {
        return (0, index_1.divide)(a, b);
    }
    catch (error) {
        console.error("Error:", error.message);
        return Number.NaN; // Or handle the error differently (e.g., return a default value)
    }
}
console.log("Addition:", (0, index_1.add)(5, 3)); // Output: 8
console.log("Subtraction:", (0, index_1.subtract)(10, 4)); // Output: 6
console.log("Multiplication:", (0, index_1.multiply)(2, 6)); // Output: 12
console.log("Safe Division (5 / 2):", safeDivide(5, 2)); // Output: 2.5
console.log("Safe Division (10 / 0):", safeDivide(10, 0)); // Output: Error: Division by zero is not allowed.
// Alternative way to handle division by zero using optional chaining
console.log("Optional Chaining Division (8 / 0):", (_a = (8 / 0)) === null || _a === void 0 ? void 0 : _a.toFixed(2)); // Output: NaN
