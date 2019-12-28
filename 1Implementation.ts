export function getTriangleType(x: number, y: number, z: number): string {
  if (isTriangle(x, y, z)) {
    return (
      (isEquilateral(x, y, z) && "equilateral") ||
      (isIsosCeles(x, y, z) && "isosceles") ||
      "scalene"
    );
  }

  return "not a triangle";
}

export function isTriangle(x: number, y: number, z: number): boolean {
  return x + y > z && x + z > y && y + z > x;
}

export function isEquilateral(x: number, y: number, z: number): boolean {
  return Array.from(arguments).every((e, _, arr) => e === arr[0]);
}

export function isIsosCeles(x: number, y: number, z: number): boolean {
  return x === y || x === z || y === z;
}
