const student = {
    name: "Martin",
    lastName: "Nedelkovski",
    age: 25,
    job: "front-end developer",
    sentence: function(){
        return `Hi, my name is ${student.name} ${student.lastName}. I am ${student.age} years old and work as a ${student.job}.`
    }
}

console.log(student.sentence())