//Da sse kreira objekt so ke se vika person
//i vo nego kje ima ime prezime i zanimanje 
//i vnatre kje ima metod so kje bidi definiran kako prototip so kje se vika printMyData
//



const Person = function(firstName, surName, position){
    this.firstName = firstName;
    this.surName = surName;
    this.position = position;
}

Person.prototype.printMyData = function() {
    console.log(`${this.firstName} ${this.surName} ${this.position}`);

    return [this.firstName, this.surName, this.position];
}

const human = new Person ('James', 'Jamie', 'IT')

const humanData = human.printMyData()
console.log(humanData)

let human1 = 'Jack'
// console.log(Person.prototype.isPrototypeOf(human));
// console.log(Person.prototype.isPrototypeOf(human1));

Array.prototype.duplicateMyData = (data = ['Martin', 'Software engineer']) => {
    return data.map(item => item + item)
}

// console.log(Array.prototype.duplicateMyData());
console.log(humanData.duplicateMyData(humanData));




