"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("../calculator");
test("Addition", () => {
    expect((0, calculator_1.add)(5, 3)).toBe(8); // Test addition functionality
    expect((0, calculator_1.add)(-5, 3)).toBe(-2); // Test with negative numbers
    expect((0, calculator_1.add)(0, 0)).toBe(0); // Test with zeros
    // Add more test cases as needed
});
//# sourceMappingURL=index.test.js.map