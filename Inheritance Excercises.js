//1. Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age
//     }
//     getInfo(){
//         return `This is ${this.firstName} ${this.lastName}, they are ${this.age} years old`

//     }

// }
// let grades = [81, 75, 81, 92]

// class Student extends Person{
//     constructor(firstName, lastName, age, grades){
//     super(firstName, lastName, age);
//     this.grades = grades
// } calcAvgGrade(){
//     return grades.reduce((a, b) => a + b) / grades.length
// }}

// let me = new Student("george", "knapasjo", 21, []);

// console.log(me.calcAvgGrade())


// Q4 SECOND METHOD
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    getInfo() {
        return `This is ${this.firstName} ${this.lastName}, they are ${this.age} years old`

    }

}


class Student extends Person {
    constructor(firstName, lastName, age, grades) {
        super(firstName, lastName, age);
        this.grades = grades
    } calcAvgGrade() {
        let total = 0
        for (let i = 0; i < grades.length; i++) {
            total += grades[i]
        }
        return total / 4
    } getInfo() {
        return super.getInfo() + ` their average grade is ${this.calcAvgGrade()}`
    }

}
let grades = [81, 75, 81, 92]
let me = new Student("george", "knapasjo", 21);

console.log(me.calcAvgGrade())
console.log(me.getInfo())
let students = [
    new Student('George', "Knapasjo", 21, [89, 87, 91, 94]),
    new Student("chad", "chaddington", 23, [62, 51, 49, 46]),
    new Student("jeff", "jeffington", 26, [76, 57, 72, 65]),
    new Student("brad", "bradly", 25, [56, 49, 76, 89])
]

class Teacher extends Person {
    constructor(firstName, lastName, age, students) {
        super(firstName, lastName, age)
        this.students = students
    } getAverageOfStudents() {
        let totalGrades = 0;
        for (let i = 0; i < this.students.length; i++) {
            let student = this.students[i];
            let avgGrade = student.calcAvgGrade();
            totalGrades += avgGrade;
           
        }
        return totalGrades / this.students.length;
    } 
    getInfo(){
        return super.getInfo() + ` their students average grade is ${this.getAverageOfStudents()}`
    }

}


let myTeacher = new Teacher("luke", "parker", 23, students)
console.log(myTeacher.getAverageOfStudents())
console.log(myTeacher.getInfo())

