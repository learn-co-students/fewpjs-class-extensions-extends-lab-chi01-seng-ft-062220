class Polygon {
    constructor(array){
        this.array = array;
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {

    get isValid() {
        let a = this.array[0];
        let b = this.array[1];
        let c = this.array[2];
        return a + b > c && b + c > a && a + c > b
        }
    }

class Square extends Polygon{
    get isValid(){
        let a = this.array[0];
        let b = this.array[1];
        let c = this.array[2];
        let d = this.array[3];
        return (a === b) && (c === d) && (a === d)
    }

    get area(){
        return this.array[0]**2
    }


}

