'use strict';

function Person(name,age) {
    this.name = name;
    this.age = age;
}

const person1 = { name : 'bob', age : 20};
const person2 = { name : 'steve', age : 21};
const person3 = new Person("dave",30);

let key;
const person4 = {};
for (key in person3) {
    person4[key] = person3[key];
}
console.log(person4);

console.log(`\n`);
const person5 = {};
Object.assign(person5,person3);
console.log(person5);

console.log(`\n`);
const person6 = Object.assign({},person3);
console.log(person6);


console.log(`\n`);
const fruit1 = {color : 'red1', size1 : 'big1'};
const fruit2 = {color : 'red2', size2 : 'big2'};
const fruit3 = {color : 'red3', size3 : 'big3'};
const mixed_fruit = Object.assign({}, fruit1, fruit2);  // 값을 덮어 씀  
console.log(mixed_fruit);
