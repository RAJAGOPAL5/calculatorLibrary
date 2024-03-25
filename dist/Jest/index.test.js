"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test("Addition (2 + 3)", () => {
    expect((0, index_1.add)(2, 3)).toBe(5);
});
test("Subtraction (10 - 4)", () => {
    expect((0, index_1.subtract)(10, 4)).toBe(6);
});
test("Multiplication (2 * 6)", () => {
    expect((0, index_1.multiply)(2, 6)).toBe(12);
});
test("Division (10 / 2)", () => {
    expect((0, index_1.divide)(10, 2)).toBe(5);
});
// // Test for the square function (assuming it's implemented)
// test("Square (3)", () => {
//   expect(square(3)).toBe(9);
// });
// test("Square (-2)", () => {
//   expect(square(-2)).toBe(4);
// });
// // Test for the modulo function (assuming it's implemented)
// test("Modulo (5 % 2)", () => {
//   expect(modulo(5, 2)).toBe(1);
// });
// test("Modulo (-7 % 3)", () => {
//   expect(modulo(-7, 3)).toBe(-1); // Handle negative modulo cases if applicable
// });
// Add more test cases for edge cases and different scenarios
//# sourceMappingURL=index.test.js.map