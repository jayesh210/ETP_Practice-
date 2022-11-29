var arr=["one","two","three","four","five","six","seven","eight"];

// Push Operation add data to array at last position
arr.push("nine");
console.log(arr);

// Pop Operation remove data from array at last position
arr.pop();
console.log(arr);


// Return index of element in array and return -1 if not found
console.log(arr.indexOf('three'));
console.log(arr.indexOf('ten'));

// Concat add two array 
var temp_arr=["x", "y", "z"]
result_arr=arr.concat(temp_arr);
console.log(result_arr);

// Shift function remove element from first position
const firstElement = arr.shift();
const secondElement = arr.shift();
console.log(arr);

console.log("First element",firstElement);
console.log("Second element",secondElement);;


// Slice function select element from start to end(not included) 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



// Some return true if it fulfills the condition
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]


// Splice replaces element with input element in array
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

