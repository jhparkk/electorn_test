'use strict';

//
// 4. Error Handling
//
const getHen = (animal) => 
    new Promise((resolve, reject) => {
        console.log(`getHen: [${animal.name}:${animal.type}]`);
        setTimeout(() => resolve(animal), 1000);
    });


const getEgg = (animal) => 
    new Promise((resolve, reject) => {
        console.log(`getEgg: [${animal.name}:${animal.type}]`);
        if (animal.type === "bird") setTimeout(() => resolve(`${animal.name}:${animal.type} => egg`), 1000);
        else setTimeout(() => reject(new Error(`${animal.name}:${animal.type} is not bird`)), 1000);
    });

const cook = (egg) =>
    new Promise((resove, reject) => {
        setTimeout(() => resove(`${egg} => egg fried`), 1000);
    });

//const animal_name = prompt("input animal_name");
//const animal_type = propmt("input animal_type");
const animal = {
    name : "cow",
    type : "cow",
};

/*
getHen(animal)
.then(animal => getEgg(animal))
.then(chicken => cook(chicken))
.then(meal => console.log(meal));
*/
getHen(animal)
    .then(getEgg)
    .catch(error => {
        return `unknown animal`;
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);