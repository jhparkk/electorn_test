'use strict'

const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);


for (let fruit of fruits) {
    console.log(fruit);
}


console.log(`\nforEach function test`);
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
/**
* Calls a defined callback function on each element of an array, and returns an array that contains the results.
* @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
* @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
**/
fruits.forEach(function (fruit,index) {
    console.log(fruit,index);
});

fruits.forEach((fruit) => {
    console.log(fruit);
});


console.log(`\npush / pop test`);
fruits.push('strawberry');
fruits.push('mango');
console.log(fruits);

fruits.pop();
console.log(fruits);


console.log(`\nunshift / shift test`);
fruits.unshift('strawberry1');
fruits.unshift('mango1');
console.log(fruits);

fruits.shift();
console.log(fruits);
//node!! : shift, unshift are slower than pop, push

console.log(`\nsplice test1`);
fruits.splice(0,fruits.length); // reset array
fruits.push('apple');
fruits.push('banana');
fruits.push('strawberry');
fruits.push('mango');

console.log(fruits);
fruits.splice(1);
console.log(fruits);

console.log(`\nsplice test2`);
fruits.splice(0,fruits.length); // reset array
fruits.push('apple');
fruits.push('banana');
fruits.push('strawberry');
fruits.push('mango');

console.log(fruits);
fruits.splice(1,2);
console.log(fruits);

console.log(`\nsplice and push test`);
fruits.splice(0,fruits.length); // reset array
fruits.push('apple');
fruits.push('banana');
fruits.push('strawberry');
fruits.push('mango');

console.log(fruits);
fruits.splice(1,2,'replace1','replace2');
console.log(fruits);


console.log(`\ncombine two arrys test(concat)`);
fruits.splice(0,fruits.length); // reset array
fruits.push('apple');
fruits.push('banana');
fruits.push('strawberry');
fruits.push('mango');

const fruits2 = ['new_apple', 'new_banana'];
const new_fruits = fruits2.concat(fruits);
console.log(new_fruits);


console.log(`\nsearching1 (indexOf)`);
fruits.splice(0,fruits.length); // reset array
fruits.push('apple');
fruits.push('banana');
fruits.push('strawberry');
fruits.push('mango');

console.log(fruits);
console.log(fruits.indexOf("banana"));
console.log(fruits.includes("banana"));
console.log(fruits.indexOf("unknown"));
console.log(fruits.includes("unknown"));

console.log(`\nsearching2 (lastIndexOf)`);
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));


