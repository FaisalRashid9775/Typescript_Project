import {Student} from './person'
import {Instructor} from './person'
import Course from './course'
import Department from './department'


// Create Student instance
let student1= new Student('Alex',18,'PIAIC62250')
let student2= new Student('Alexa',24,'PIAIC63250')
let student3= new Student('Alexzander',20,'PIAIC62550')
let student4= new Student('Alice',22,'PIAIC62650')
student1.registerForCourses('BCC')
student2.registerForCourses('IOT',)
student3.registerForCourses('Metaverse')
//console.log(student1)


//Create Instuctor Instance
let instructor1 = new Instructor('Zia',60,120000)
let instructor2 = new Instructor('Adil',30,100000)
instructor1.assignCourse('BCC','IOT')
instructor2.assignCourse('Metaverse')


// Create Instance of Course

let course1 =new Course(1,'BCC')
let course2 =new Course(2,'IOT')
let course3 =new Course(3,'Metaverse')


course1.addStudent(student1)
course2.addStudent(student2)
course3.addStudent(student3)

course1.setInstructor(instructor1)
course2.setInstructor(instructor1)
course3.setInstructor(instructor2)



// Department

let department1 = new Department('Metaverse')
let department2 = new Department('BCC')
let department3 = new Department('IOT')
department1.addCourse(course3)
department2.addCourse(course1)
department3.addCourse(course2)

console.log(department1)

//console.log(course1)
