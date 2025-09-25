// //Task 1

// function* manageSession(): Generator<string, void, unknown>{
//     yield 'Starting session'
//     yield 'Logging in'
//     yield 'Performing tasks'
//     yield 'Logging out'
// }

// const userSession = manageSession()
// let isLoggedIn = false

// function validateSession(action: string){
//     const {value, done} = userSession.next()

//     if(value ==="Logging in" && action === 'Success'){
//         isLoggedIn = true
//     } else if (value === "Logging out" && action === 'Logout'){
//         isLoggedIn = false
//     }

//     if(done) {
//         console.log("Session ended")
//     }

//     if(value === "Performing tasks" && !isLoggedIn){
//         console.log('User is not logged in.')
//         return
//     }

//     console.log(value)
// }

// validateSession('Proceed')
// validateSession('Success')
// validateSession('Task')
// validateSession('Logout')



//Task 2

// const shoppingCart = (price: number, discount: number, ...products: number[]): string => {
//     const totalProducts = products.reduce((total, prod) => total + prod, 0)
//     const calculateTotal = price * totalProducts
//     const applyDiscount = calculateTotal - (calculateTotal * discount / 100)
//     return `There are ${totalProducts} products with ${calculateTotal} price with discount of ${discount} and after discount price is ${applyDiscount}`
// }

// console.log(shoppingCart(1200, 10, 3,6,7))



// Task 3

// type msgInfo = "INFO" | "WARN" | "ERROR"

// function logMessage(msgInfo: msgInfo, message: string): void
// function logMessage(msgInfo: msgInfo, ...message: string[]): void
// function logMessage(msgInfo: msgInfo, message: string, logCode: number): void
// function logMessage(msgInfo: msgInfo, message: string, logData: object): void

// function logMessage(msgInfo: msgInfo, ...args: any[]): void{
//     if(typeof args[0] === 'string' && typeof args[1] === 'number'){
//         console.log(`${msgInfo}  ${args[0]} (Code: ${args[1]})`)
//     } else if(typeof args[0] === 'string' && typeof args[1] === 'object'){
//         console.log(`${msgInfo} ${args[0]} ${JSON.stringify(args[1],null,3)}`)
//     } else if (args.every(arg => typeof arg === 'string')){
//         console.log(`${msgInfo} ${args.join(' ')}`)
//     } else if (typeof args[0] === 'string'){
//         console.log(`${msgInfo} ${args[0]}`)
//     }
// }



// logMessage('INFO', 'Page Loaded')
// logMessage('WARN', 'Loading content', ' Please wait')
// logMessage('ERROR', 'Error not found', 404)
// logMessage('INFO', 'User info', {username: 'mike123', pass: 'check123'})