import * as arrays from './ArraysAndTuples';

//spread operator -> expanding iterable objects(arrays, object literal) & spreads the values
console.log(arrays.list);
console.log(arrays.lists);
let combinedArray =[...arrays.list, ...arrays.lists]
console.log(combinedArray);

// Using Object literals
const object1 = {
    first: "A",
    second: 1
}

const object2 = {
    ...object1,
    third: true
}
console.log(object2);

//rest parameter -> pass indefinite number of parameters to the functon

let total = (...numbers:number[]):void => {
    console.log(numbers);
}
total(5,6,8);