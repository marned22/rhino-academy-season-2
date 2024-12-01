// Exercise 3

// A.

const employer = (name, company, experience, position) => {
    return `Employer ${name} from ${company} has ${experience} years at his position as ${position}.`;
}

console.log(employer('Goran', 'Rhino' , 5 , 'Software developer'));


// B.

const calculate = (a, b) => {
    return Math.round(a + b);
}

console.log(calculate(4.42, 9.87));

