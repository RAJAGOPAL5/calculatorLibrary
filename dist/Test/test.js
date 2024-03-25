"use strict";
// Test/test.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDivide = void 0;
const index_1 = require("../index");
function safeDivide(a, b) {
    if (b !== 0) {
        return (0, index_1.divide)(a, b);
    }
    else {
        throw new Error("Division by zero is not allowed."); // Throw an error
    }
}
exports.safeDivide = safeDivide;
console.log("Addition:", (0, index_1.add)(5, 3));
console.log("Subtraction:", (0, index_1.subtract)(10, 4));
console.log("Multiplication:", (0, index_1.multiply)(2, 6));
console.log("Safe Division ", safeDivide(10, 2));
//# sourceMappingURL=test.js.map