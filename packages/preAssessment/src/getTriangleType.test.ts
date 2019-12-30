// The program reads three integer values from an input dialog. The
// three values represent the lengths of the sides of a triangle. The pro-
// gram displays a message that states whether the triangle is scalene,
// isosceles, or equilateral.
//
import each from "jest-each";
import getTriangleType from "./getTriangleType";

describe("getTriangleType", () => {
  each([
    [0, 0, 0, "not a triangle"],
    [-1, -1, -1, "not a triangle"],
    [1, 2, 10, "not a triangle"],
    [4, 4, 4, "equilateral"],
    [2, 1, 2, "isosceles"],
    [1, 2, 2, "isosceles"],
    [2, 2, 1, "isosceles"],
    [2, 3, 4, "scalene"],
    [7, 5, 6, "scalene"],
    [1.5, 5, 4, "scalene"]
  ]).test("Sides %d %d %d: %s", (a, b, c, expected) => {
    expect(getTriangleType(a, b, c)).toBe(expected);
  });
});
