"use strict";
// src/Jest/calculator.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("../calculator");
// Define the safeDivide function within the test file
function safeDivide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return (0, calculator_1.divide)(a, b);
}
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
    test('Safe Division (5 / 2)', () => {
        expect(safeDivide(5, 2)).toBe(2.5);
    });
    test('Safe Division (10 / 0)', () => {
        try {
            safeDivide(10, 0);
            fail('Expected safeDivide to throw an error');
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});
//# sourceMappingURL=calculator.test.js.map