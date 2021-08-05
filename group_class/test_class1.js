'use strict';

class Person {
    // consturctor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}[${this.age}]: hello!`);
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value > 30 ? 30 :value;
    }
}

class Student extends Person {
    constructor(grade, name, age) {
        super(name, age)
        this.grade = grade;
    }

    get grade() {
        return this._grade;
    }
    set grade(value) {
        if (value > 0 && value < 7) this._grade = value;
    }
}

const person = new Student(3,'jhpark',37);
person.speak();
