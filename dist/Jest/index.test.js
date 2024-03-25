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
//# sourceMappingURL=index.test.js.map