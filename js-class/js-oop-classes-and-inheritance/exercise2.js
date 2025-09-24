class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi i am ${this.name} and i am ${this.age} years old.`)
    }
    celebrateBirthday(){
        this.age += 1
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name,age);
        this.subject = subject;
    }
    teach() {
        console.log(`I am teaching ${this.subject}`)
    }
}

class Student extends Person{
    constructor(name, age, grade) {
        super(name, age, grade)
        this.grade = grade;
    }
    study(){
        console.log(`I am stydying hard to improve my grade ${this.grade}`)
    }
}

const thomas = new Teacher('Thomas', 40, 'OOP')
thomas.introduce()
thomas.teach()
console.log('--------------------------------------');
const james = new Student('James', 20, 7)
james.introduce()
james.study()
console.log('--------------------------------------');
thomas.celebrateBirthday()
thomas.introduce()