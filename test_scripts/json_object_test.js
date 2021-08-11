'use strict'

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${name} can jump!`);
    },
}

let json = JSON.stringify(rabbit);
console.log("\n##object print##");
console.log(rabbit);

console.log("\n##json print##");
console.log(json);

console.log("\n##json property print##");
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

console.log("\n##json stringify callback test##");
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key[${key}] : value[${value}]`);
    return key === "name" ? "jhpark" : value;
});
console.log(json);

console.log("\n##json parse callback test##");
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key[${key}] : value[${value}]`);
    return key == 'birthDate' ? new Date(value) : value;
});
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());