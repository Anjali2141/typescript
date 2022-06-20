// Enums = define a set of named constant at compile-time

enum Direction {
    North,
    South,
    East,
    West
};
// if values not initialized, assigns 0 first then auto-increment values
console.log(Direction.North);
console.log(Direction.South);
console.log(Direction.East);
console.log(Direction.West , '\n');

enum Shapes {
    Circle = "C",
    Rectangle = "R",
    Triangle = "T"
};
console.log(Shapes.Circle);
console.log(Shapes.Rectangle);
console.log(Shapes.Triangle);