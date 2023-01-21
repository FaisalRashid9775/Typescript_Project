import Course from "./course"



class Department{
    constructor(name: string){
        this.name=name
    }
    name: string
    courses : Course[]=[]

    addCourse(course : Course){
        this.courses.push(course)
    }
}
export default Department