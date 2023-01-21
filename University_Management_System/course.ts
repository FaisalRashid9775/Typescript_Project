import {Student} from './person'
import {Instructor} from './person'




class Course{
    constructor(id : number,name : string){
        this.id=id
        this.name=name
    }
    id : number
    name : string
    student : Student[]=[]
    instructors : Instructor[]=[]
    addStudent(students : Student){
        this.student.push(students)
        
    }
    setInstructor(instructor: Instructor){
        this.instructors.push(instructor)
        
    }
}

export default Course