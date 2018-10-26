//my code
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(a) {
        this.a = a;
    }
    perimeter() {
        var total = 0;
        for (var i in this.a) { total += this.a[i]; }
        return total;
    }
}


//better, using reduce:
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce(function add(a, b) { return a + b; })
    }
}