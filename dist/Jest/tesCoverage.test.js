"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const test_1 = require("../Test/test");
// Test cases for calculator functions
test("Addition", () => {
    expect((0, index_1.add)(5, 3)).toBe(8);
});
test("Subtraction", () => {
    expect((0, index_1.subtract)(10, 4)).toBe(6);
});
test("Multiplication", () => {
    expect((0, index_1.multiply)(2, 6)).toBe(12);
});
test("Division", () => {
    expect((0, index_1.divide)(10, 2)).toBe(5);
});
test("Safe Division (valid division)", () => {
    expect((0, test_1.safeDivide)(5, 2)).toBe(2.5);
});
test("Safe Division (division by zero)", () => {
    expect((0, test_1.safeDivide)(10, 0)).toBeNaN();
});
//# sourceMappingURL=tesCoverage.test.js.map