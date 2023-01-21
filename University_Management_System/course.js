"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Course {
    constructor(id, name) {
        this.student = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    addStudent(students) {
        this.student.push(students);
    }
    setInstructor(instructor) {
        this.instructors.push(instructor);
    }
}
exports.default = Course;
