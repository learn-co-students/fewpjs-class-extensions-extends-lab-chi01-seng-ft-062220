class Polygon{
    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(a,b){return a + b})
    }
}

class Triangle extends Polygon{

    get isValid(){
        if((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[0] + this.sides[2] > this.sides[1])){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{
    
    get isValid(){
        if ((this.countSides === 4) && (this.sides.every(value => value === this.sides[0]))){
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.sides[0] ** 2
    }
}