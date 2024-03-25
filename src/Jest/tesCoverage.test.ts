// // testCoverage.test.ts

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
// testCoverage.test.ts

// test("Safe Division (10 / 0)", (done) => {
//   expect(() => {
//     safeDivide(10, 0);
//   }).toThrow();
//   done(); // Signal test completion after handling the error
// });


// testCoverage.test.ts

test("Safe Division (10 / 0)", async () => {
  await expect(() => safeDivide(10, 0)).toThrow();
});



  });
});

