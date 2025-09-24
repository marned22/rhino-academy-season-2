interface PeopleI {
    readonly id: number;
    firstName: string;
    lastName: string;
    yearOfBirth: number;
}


class Person implements PeopleI{
    readonly id: number;
    firstName: string;
    lastName: string;
    yearOfBirth: number;

    constructor(id: number, firstName: string, lastName: string, yearOfBirth: number){
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
    }

    age(): number {
        return new Date().getFullYear() - this.yearOfBirth
    }

    information(): string{
        return `Hello ${this.firstName}, ${this.lastName} born in ${this.yearOfBirth} with ${this.age()} years. `
    }
}

enum Position {
    frontEnd = 'Front-end',
    backEnd = 'Back-End',
    fullStack = 'Full-Stack'
}

class User extends Person{
    position: Position
    userName: string;
    email: string;
    yearsExpirience?: number;

    constructor(id: number, firstName: string, lastName: string, yearOfBirth:number, userName:string, email: string, position: Position, yearsExpirience: number){
        super(id, firstName, lastName, yearOfBirth)
        this.userName = userName;
        this.email = email
        this.position = position
        this.yearsExpirience = yearsExpirience
    }

    userInfo(): string{
        if(this.yearsExpirience === 0){
            return `${this.firstName} with user name ${this.userName}, user email ${this.email}, role ${this.position} without expirience`
        } else {
            return `${this.firstName} with user name ${this.userName}, user email ${this.email}, role ${this.position} with ${this.yearsExpirience} year of expirience`
        }
    }
}
const users: User[] = []

function addUser(user: User): void {
    users.push((user))
}

function getUsersByPosition(position: Position): User[] {
    return (users.filter(user => user.position === position))
}







const jame = new Person(1, "Jame", "Jones", 1997);
const johny = new User(2, "Johny", "Thompson", 2005, 'john123', 'john@gmail.com', Position.frontEnd, 5)
const mike = new User(3, "Mike", "Miley", 20, 'john123', 'john@gmail.com', Position.backEnd, 0)

addUser(johny)
addUser(mike)

console.log(jame.information());
console.log(johny.userInfo())
console.log(mike.userInfo());
console.log(jame instanceof User)
console.log(johny instanceof User)

console.log(getUsersByPosition(Position.frontEnd))

