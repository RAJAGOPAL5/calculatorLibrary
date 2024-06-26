import { add, subtract, multiply, divide } from "../calculator";

describe("Calculator Tests", () => {
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
    expect(divide(8, 2)).toBe(4);
  });

  // test('Safe Division (5 / 2)', () => {
  //   expect(safeDivide(5, 2)).toBe(2.5);
  // });

  test("Safe Division (10 / 0)", () => {
    expect(() => divide(10, 0)).toThrowError(
      "Division by zero is not allowed."
    );
  });

  test("Error Handling - Division by zero", () => {
    expect(() => divide(10, 0)).toThrowError(Error); // Test that divide(10, 0) throws an Error
    try {
      divide(10, 0);
    } catch (error: any) {
      expect(error.message).toBe("Division by zero is not allowed."); // Verify the error message
    }
  });
});
