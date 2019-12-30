function isTriangle(x: number, y: number, z: number): boolean {
  return x + y > z && x + z > y && y + z > x;
}

function isEquilateral(x: number, y: number, z: number): boolean {
  return Array.from(arguments).every((e, _, arr) => e === arr[0]);
}

function isIsosceles(x: number, y: number, z: number): boolean {
  return x === y || x === z || y === z;
}

export default function getTriangleType(
  x: number,
  y: number,
  z: number
): string {
  return isTriangle(x, y, z)
    ? (isEquilateral(x, y, z) && "equilateral") ||
        (isIsosceles(x, y, z) && "isosceles") ||
        "scalene"
    : "not a triangle";
}
