const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}

class Person{
    constructor(firstName, lastName, age, id){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
        this.id = id
    }
    getInfo(){
        return `This is ${this.firstName} ${this.lastName}, they are ${this.age} years old`

    }
    static generateRandomName(numberOfRndmPpl){
        let randomPeople = [];
        for(let i = 0; i < numberOfRndmPpl; i++){
           let randomPerson = new Person(getRandomGivenName(), getRandomFamilyName(), 21, i);
           randomPeople.push(randomPerson);
        }
        return randomPeople
    }

}
console.log(Person.generateRandomName(5))

//CREATE RANDOM TEACHER AND STUDENT GENERATOR AND RANDOM MARK GENERATOR