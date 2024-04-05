// testCoverage.test.ts
import { safeDivide } from "../Test/test";

describe("Calculator Operations", () => {
  test("Safe Division (5 / 2)", () => {
    expect(safeDivide(5, 2)).toBe(2.5);
  });

  test("Safe Division (10 / 0)", async () => {
    await expect(() => safeDivide(10, 0)).toThrow();
  });
});
