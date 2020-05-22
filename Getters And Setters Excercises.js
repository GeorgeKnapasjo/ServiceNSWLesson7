//1. Create a class called Square with a single property, sideLength and create a constructor that assigns that value
class Square{
    constructor(sideLength){
        this.sideLength = sideLength
    }
    get area(){
        return this.sideLength* this.sideLength
    }
    set area(value){
        this.sideLength = Math.sqrt(value)
    }
}
let square1 = new Square(6)
// console.log(square1.area)
square1.area = 81
console.log(square1.area)
console.log(square1.sideLength)
