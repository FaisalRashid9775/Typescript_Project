"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
exports.default = Department;
