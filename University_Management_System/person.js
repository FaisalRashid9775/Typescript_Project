"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = exports.Student = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getname(name) {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourses(...course) {
        this.courses.push(...course);
    }
}
exports.Student = Student;
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.course = [];
        this._salary = salary;
    }
    assignCourse(...course) {
        this.course.push(...course);
    }
}
exports.Instructor = Instructor;
