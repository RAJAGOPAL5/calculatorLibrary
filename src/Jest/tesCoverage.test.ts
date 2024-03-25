// testCoverage.test.ts
import { add, subtract, multiply, divide } from "../index";
import { safeDivide } from "../Test/test";

describe("Calculator Operations", () => {
  test("Addition", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("Subtraction", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("Multiplication", () => {
    expect(multiply(2, 6)).toBe(12);
  });

  test("Division", () => {
    expect(divide(10, 2)).toBe(5);
  });

  describe("Safe Division", () => {
    test("Valid division", () => {
      expect(safeDivide(10, 2)).toBe(5);
    });


test("Safe Division (10 / 0)", async () => {
  await expect(() => safeDivide(10, 0)).toThrow();
});



  });
});

