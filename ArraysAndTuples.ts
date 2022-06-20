export let list: number[] = [111, 44, 7];
console.log(list);
list.push(54);
console.log(...list); //spread operator{...}

export let lists: number[] = new Array(3);
lists[0] = 77;
lists[1] = 86;
lists[2] = 23;
console.log(...lists);

let newArray = [list, lists];
console.log(newArray);

let alphabet: Array<string> = ['a', 'e', 'y'];
console.log(alphabet);

// tuples = store multiple values of different data types
let multipleValues = [10, 'number', true]
console.log(multipleValues);
console.log(multipleValues[0]);
console.log(multipleValues[2] +'\n');