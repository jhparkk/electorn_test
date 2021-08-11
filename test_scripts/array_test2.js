'use strict'

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student("jhpark1", 37, true, 90),
    new Student("jhpark2", 32, false, 92),
    new Student("jhpark3", 33, true, 93),
    new Student("jhpark4", 34, true, 94),
    new Student("jhpark5", 14, true, 94),
]


console.log("");
console.log("functional programing test");
{
    const result_map = students.map((student) => student.age);
    console.log('result_map : ', result_map);
    const result_sort = result_map.sort((a, b) => a-b);
    console.log('result_sort : ', result_sort);
    const result_join = result_sort.join();
    console.log('result_join : ', result_join);
}
{
    const result = students
        .map((student) => student.age)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}


 