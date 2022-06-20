
// why typescript 
    // adds static typing = through type annotations to enable compile-time type checking
    // strongly typed language = specify the data tupe
    // it will give error for getting unexpected values

// let number = 44;
// number = '44'; -- compile time error


// creating variables

// 1. Implicit way
let distances = "12km";
console.log(<string>distances)
console.log(typeof distances)


// 2.Explicit way
let speeds: string = "40km"
console.log(speeds)
console.log(typeof speeds)

let time = "2 minutes";
console.log(time)
console.log(typeof time)
