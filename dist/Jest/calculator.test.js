"use strict";
// src/Jest/calculator.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("../calculator");
describe('Calculator Tests', () => {
    test('Addition', () => {
        expect((0, calculator_1.add)(5, 3)).toBe(8);
    });
    test('Subtraction', () => {
        expect((0, calculator_1.subtract)(10, 4)).toBe(6);
    });
    test('Multiplication', () => {
        expect((0, calculator_1.multiply)(2, 6)).toBe(12);
    });
    test('Division', () => {
        expect((0, calculator_1.divide)(8, 2)).toBe(4);
    });
    test('Safe Division', () => {
        expect(() => (0, calculator_1.divide)(10, 0)).toThrowError('Division by zero is not allowed.');
    });
});
//# sourceMappingURL=calculator.test.js.map