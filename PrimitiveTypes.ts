// data types
// Primitive types
// number, string, boolean, void, null, undefined

// Any type = "super-type of all data type"
let value: any = "any value";
value = 55;
value = true;

let firstCount: number= 23;
// firstCount = 'first'
console.log(firstCount);

let secondCount: number= 12.2;
console.log(secondCount);

let studentName: string = "Rose"
console.log(studentName);

let isCompleted: boolean=true;
console.log(isCompleted);

// void = return type of void function that dont return anything
function print(a:number):void {
    console.log(a);
}
print(99);

let printAgain = function():void {
    console.log("ES5 function");
}
printAgain();

let helloWorld =():void => {
console.log("hello World")
}
helloWorld();

// Undefined = uninitializes variables
let b;
console.log(typeof b)

let string = null;
console.log(string)