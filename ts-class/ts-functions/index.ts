// function multiply(a: number, b: number){
//  return a * b
// }

// console.log(multiply(2, 5))


// const printWelcomeMessage = (name: string, age: number = 25) => {
//     if(age){
//         return `Hello ${name}. You are ${age} years olde`
//     }
// }

// console.log(printWelcomeMessage('John'));


// const calcSum = (...numbers: number[]) => {
//     return numbers.reduce((total, num) => total + num, 0)
// }

// console.log(calcSum(10, 15, 23, 5, 6));

// director: 'Julius Onah',  

// const createMovie = (name: string, year: number, rating:number, country?: string, ...acters: string[]): string => {
//     if(country){
//         return `This movie ${name} is from ${year}, acters are ${acters}, have rating ${rating}, and is from ${country} `
//     } else {
//         return  `This movie ${name} is from ${year}, acters are ${acters}, have rating ${rating}, and we dont know the counry`
//     }
// }

// console.log(createMovie('Captain America', 2020, 7, undefined, 'Antonie Mackie', 'Harrison Ford'))


// class Person{
//     constructor(public name: string) {}

//     printHelloMessage(this: { name: string}, message: string, punctuation: string): string {
//         return `${message}, ${this.name}${punctuation}`
//     }
// }

// const person = new Person('Jame')
// console.log(person.printHelloMessage('Hello', '!'))

// const callMessage = person.printHelloMessage.call({ name: 'John'}, 'Hello', '@')
// console.log(callMessage);

// const applyMessage = person.printHelloMessage.apply({name: 'Test'}, ['Hi', '*'])
// console.log(applyMessage);

// const bindPringHelloMessage = person.printHelloMessage.bind({name: 'Ipsum'})
// console.log(bindPringHelloMessage('Good Mornning', '&'));

// const simpleCounter = function*(): Generator<number, void, unknown> {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const counter = simpleCounter()

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

// console.log('--------------------------------------');


// function* menageUserSession(): Generator<string, void, unknown> {
//     yield 'Session Started';
//     yield 'User logged in';
//     yield 'User performing task';
//     yield 'User logged out'
// }

// const userSession = menageUserSession()

// console.log(userSession.next());
// console.log(userSession.next());
// console.log(userSession.next());
// console.log(userSession.next());
// console.log(userSession.next());


// type AddFunctionType = (a: number, b: number) => number;
// const addFunction: AddFunctionType = (a, b) => a + b

// type firstObjectType = {
//     name: string;
//     sayHello: (this: firstObjectType, greeting: string) => string;
// }

// const firstObject: firstObjectType = {
//     name: 'John',
//     sayHello(this, greeting){
//         return `${greeting}, ${this.name}`
//     }
// }

// console.log(firstObject.sayHello('Hello'))


// const nums = [1, 2, 3, 4, 5]
// const squares = nums.map(num => num * num)

// console.log(squares);



// function printHelloMessage(name: string): string
// function printHelloMessage(name: string, age: number): string

// function printHelloMessage(name: string, age = 25) {
//     if(!age){
//         return `Hello ${name}`
//     } else {
//         return `Hello ${name}, You are ${age} years old`
//     }
// }


// console.log(printHelloMessage('Test'))



// const printHelloMessage: {
//     (name: string): string
//     (name: string, age: number): string
// } = (name: string, age?: number): string => {
//         if(!age){
//             return `Hello ${name}`
//         } else {
//             return `Hello ${name}, You are ${age} years old`
//         }
//     }



// function auto(model: string): string
// function auto(model: string, year: number): string

// function auto(model: string, year = 2025){
//     if(!year){
//         return `This is ${model}`
//     } else {
//         return `This is ${model} from ${year}`
//     }
// }


// console.log(auto('Ferrari'))


// const auto: {
//     ( model: string): string
//     ( model: string, year: number): string
// } = ( model: string, year?: number): string => {
//     if(!year){
//         return `This is ${model}`
//     } else {
//         return `This is ${model} from ${year}`
//     }
// }

// console.log(auto('Mercedes'))