"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
// src/calculator.ts
function add(a, b) {
    return a + b;
}
exports.add = add;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
exports.divide = divide;
//# sourceMappingURL=calculator.js.map