export{}
const user: {
    a:string,
    b:number,
    c:string
} = {
    a:"watch",
    b:99,
    c:"dice"
};

const {a, b}:{a:string, b:number} = user;
console.log(a,b);

// let {a:first, b:second, c:third}:{a:string, b:number, c:string} = user;
let{a:first,b:second, c:third}:typeof user =user
console.log(first,second,third);

let {a:first1, b:second2, c:third3} = user
console.log(first1,second2,third3);

//Array destructuring
let numbers:number[] = [33,66,87,86,55]
const[one,two,...three] = numbers;
console.log(one,two,three);