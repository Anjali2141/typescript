// tell compiler which property names given object can have
//type-checking
//declaratioin of methods and field, but no implementation

interface Shape {
    numberOfSides:number;
    getName():string;
}

// Using function
let getShape = (givenShape:Shape):void => {
    console.log(givenShape.getName());
    console.log(givenShape.numberOfSides);

};

getShape({
    numberOfSides:4,
    getName:()=> {
       return "rectangle";
    }
});

// Using class
class Rectangle implements Shape {

    numberOfSides:number;
    getName():string {
        return "implementing shape";
    }
    
    public constructor(sides:number) {
        this.numberOfSides = sides;
    }
}
let rect = new Rectangle(4);
console.log(rect.getName());
console.log(rect.numberOfSides);