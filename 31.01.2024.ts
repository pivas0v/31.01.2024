// class ClassName {}
// class Point { x: number; y: number; }
// let qwerty: Point = new Point();

// function qwerty1(){
//     qwerty.x =1; 
//     qwerty.y = 2;
// }

// qwerty1();

// class Point1 {width: number; height: number};
// let qwerty2: Point1 = new Point1()

// function qwerty3(){
//     qwerty2.height = 5;
//     qwerty2.width = 10;
// }

// qwerty3();

class Rect {
    private x1: number; 
    public x2: number; 
    y1: number; 
    y2: number; 
    private readonly MAX_COORD = 1000;
    constructor(x1?: number, x2?: number, y1?: number, y2?: number){
        this.x1 = 1
        this.x2 = 10
        this.y1 = 34
        this.y2 = 50
    }
    square(){
        return Math.abs(this.x1 - this.x2)* Math.abs(this.y1 - this.y2)
    }
}

let rect1: Rect = new Rect(10, 9); 

let rect2: Rect = new Rect();

rect1.x2 = 4 



console.log(rect1.square());