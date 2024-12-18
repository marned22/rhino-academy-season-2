const student = {
    name: "Martin",
    lastName: "Nedelkovski",
    age: 25,
    job: "front-end developer",
    sentence() {
        return `Hi, my name is ${this.name} ${this.lastName}. I am ${this.age} years old and work as a ${this.job}.`
    }
}

console.log(student.sentence())