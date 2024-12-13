function totalSalary(employees) {
    console.log(employees)
    let total = 0
    for(let salary in employees) {
        total += employees[salary]
    }
    return total;
}

const employees = {
    Zoran: 15000,
    Goran: 20000,
    Martina: 25000,
    Zorica: 12300
}

console.log("The total salary is: ",totalSalary(employees))