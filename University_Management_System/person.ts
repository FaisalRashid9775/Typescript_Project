export {Student, Instructor}
class Person{
    constructor(name : string, age : number){
        this.name=name
        this.age=age
    }
    name : string
    age : number
    getname(name : string){
        return this.name
    }
}


class Student extends Person {
    constructor(name : string, age : number , rollNumber : string){
        super(name, age)
        this.rollNumber=rollNumber
        
    }
    rollNumber : string
    courses : string[] = []
    registerForCourses(...course :string[]){
        this.courses.push(...course)
    }
}


class Instructor extends Person {
    constructor(name : string, age : number, salary : number){
        super(name,age)
        this._salary=salary
        
    }
   private _salary : number 
    course : string[] =[]
    assignCourse(...course : string[]){
        this.course.push(...course)
    }
}



