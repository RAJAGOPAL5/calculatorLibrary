"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
// src/index.ts
// export { add, subtract, multiply, divide,  } from './calculator';
// index.ts
function add(x, y) {
    return x + y;
}
exports.add = add;
function subtract(x, y) {
    return x - y;
}
exports.subtract = subtract;
function multiply(x, y) {
    return x * y;
}
exports.multiply = multiply;
function divide(x, y) {
    return x / y;
}
exports.divide = divide;
// This is the part that might throw an error
// export function safeDivide(x: number, y: number): number {
// //   if (y === 0) {
// //     throw new Error("Division by zero is not allowed.");
// //   }
//   return x / y;
// }
//# sourceMappingURL=index.js.map