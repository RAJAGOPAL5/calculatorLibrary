"use strict";
// // testCoverage.test.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { add, subtract, multiply, divide } from "../index";
// import { safeDivide } from "../Test/test";
// describe("Calculator Operations", () => {
//   test("Addition", () => {
//     expect(add(5, 3)).toBe(8);
//   });
//   test("Subtraction", () => {
//     expect(subtract(10, 4)).toBe(6);
//   });
//   test("Multiplication", () => {
//     expect(multiply(2, 6)).toBe(12);
//   });
//   test("Division", () => {
//     expect(divide(10, 2)).toBe(5);
//   });
//   describe("Safe Division", () => {
//     test("Valid division", () => {
//       expect(safeDivide(10, 2)).toBe(5);
//     });
//     test("Division by zero", () => {
//       expect(safeDivide(10, 0)).toBe(0);
//     });
//     // test("Division by zero", () => {
//     //   expect(safeDivide(10, 0)).toBeNaN();
//     // });
//     // test("Safe Division (10 / 0)", () => {
//     //   expect(() => safeDivide(10, 0)).toThrow(); // Expect a division by zero error
//     // });
//     // test("Safe Division (10 / 0)", () => {
//     //   expect(() => safeDivide(10, 0)).toThrowError(); // Expect a division by zero error
//     // });
//   });
// });
// testCoverage.test.ts
const index_1 = require("../index");
const test_1 = require("../Test/test");
describe("Calculator Operations", () => {
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
    describe("Safe Division", () => {
        test("Valid division", () => {
            expect((0, test_1.safeDivide)(10, 2)).toBe(5);
        });
        // testCoverage.test.ts
        // test("Safe Division (10 / 0)", (done) => {
        //   expect(() => {
        //     safeDivide(10, 0);
        //   }).toThrow();
        //   done(); // Signal test completion after handling the error
        // });
        // testCoverage.test.ts
        test("Safe Division (10 / 0)", () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(() => (0, test_1.safeDivide)(10, 0)).toThrow();
        }));
    });
});
//# sourceMappingURL=tesCoverage.test.js.map