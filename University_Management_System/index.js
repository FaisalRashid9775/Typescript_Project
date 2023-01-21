"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const person_2 = require("./person");
const course_1 = __importDefault(require("./course"));
const department_1 = __importDefault(require("./department"));
// Create Student instance
let student1 = new person_1.Student('Alex', 18, 'PIAIC62250');
let student2 = new person_1.Student('Alexa', 24, 'PIAIC63250');
let student3 = new person_1.Student('Alexzander', 20, 'PIAIC62550');
let student4 = new person_1.Student('Alice', 22, 'PIAIC62650');
student1.registerForCourses('BCC');
student2.registerForCourses('IOT');
student3.registerForCourses('Metaverse');
//console.log(student1)
//Create Instuctor Instance
let instructor1 = new person_2.Instructor('Zia', 60, 120000);
let instructor2 = new person_2.Instructor('Adil', 30, 100000);
instructor1.assignCourse('BCC', 'IOT');
instructor2.assignCourse('Metaverse');
// Create Instance of Course
let course1 = new course_1.default(1, 'BCC');
let course2 = new course_1.default(2, 'IOT');
let course3 = new course_1.default(3, 'Metaverse');
course1.addStudent(student1);
course2.addStudent(student2);
course3.addStudent(student3);
course1.setInstructor(instructor1);
course2.setInstructor(instructor1);
course3.setInstructor(instructor2);
// Department
let department1 = new department_1.default('Metaverse');
let department2 = new department_1.default('BCC');
let department3 = new department_1.default('IOT');
department1.addCourse(course3);
department2.addCourse(course1);
department3.addCourse(course2);
console.log(department1);
//console.log(course1)
