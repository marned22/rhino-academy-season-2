// // Task 1 

// function User(name, email, isActive){
//     this.name = name,
//     this.email = email,
//     this.isActive = isActive,
//     this.deactivate = function() {
//         this.isActive = false
//         console.log(`${this.name}, ${this.email}, ${this.isActive}`);
//     }
//     this.updateEmail = function(newEmail) {
//         this.email = newEmail
//         console.log(`${this.name}, ${this.email}, ${this.isActive}`);
//     }
// }

// const Jamie = new User("Jamie", 'jamie@gmail.com', true)
// Jamie.deactivate()
// const Jack = new User("Jack", 'jack@gmail.com', true)
// Jack.updateEmail('jamie99@gmail.com')

// function Profile(firstName, lastName, age, address){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.address = {
//         city: address?.city,
//         street: address?.street
//     }
//     this.fullName = function() {
//         return `${this.firstName} ${this.lastName} `;
//     }
// }

// const lara = new Profile('Lara', 'James', 25)
// console.log(lara.address?.city);
// console.log(lara.address?.street);
// lara.fullName()

// function Preferences(theme, language, notifications){
//     this.theme = theme,
//     this.language = language,
//     this.notifications = notifications,
//     this.changeTheme = function(newTheme){
//         this.theme = newTheme
//     }
// }

// let prefs1 = new Preferences("dark", "English", true);
// let prefs2 = new Preferences("light", "English", true);
// let prefs3 = new Preferences("dark", "Spanish", false);

// const user1 = new User('James', 'james@gmail.com', true)
// const user2 = new User('Mary', 'mary@gmail.com', false)
// const user3 = new User('Robert', 'robert@gmail.com', true)

// const profile1 = new Profile('James', 'Flamie')
// const profile2 = new Profile('Mary', 'Joe')
// const profile3 = new Profile('Robert', 'Smith')


// let users = [
//     { user: user1, profile: profile1, preferences: prefs1},
//     { user: user2, profile: profile2, preferences: prefs2},
//     { user: user3, profile: profile3, preferences: prefs3}
// ]

// let aciveUsers = users.filter(userObj => userObj.user.isActive)


// let darkThemeUsers = users
//     .filter(userObj => userObj.preferences.theme === 'dark')
//     .map(userObj => userObj.profile.fullName());



// console.log('--------------------------');

// console.log('Active users:', aciveUsers.map(usersObj => usersObj.user.name));

// console.log('Dark theme users:', darkThemeUsers);




// Task 2


// function Product(name, price, quantity){
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.updateQuantity = function(newQuantity){
//         this.quantity = newQuantity;
//     }
// }

// function Cart(){
//     this.items = []
//     this.addItem = function(product){
//         let existingProduct = this.items.find(item => item.name = product.name)
//         if(existingProduct){
//           existingProduct += product.quantity
//         } else {
//           this.items.push({ ...product })
//         }
//     }
//     this.removeItem = function(productName){
//         this.items = this.items.filter(item => item.name !== productName)
//     }
//     this.getTotal = function(){
//         return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
//     }
//     this.applyBulkDiscount = function() {
//       if(this.items.reduce((sum, item) => sum + item.quantity, 0) > 5){
//         return this.getTotal() * 0.9
//       }
//       return this.getTotal()
//     }
// }

// function Discount(percentage){
//   this.percentage = percentage
//   this.applyDiscount = function(price){
//     return price - (price * this.percentage / 100)
//   }
// }


// function FinalCart(cart, discount){
//   return Object.assign({}, cart, discount)
// }

// const cart = new Cart()
// const product1 = new Product("Laptop", 1000, 2)
// const product2 = new Product("PC", 800, 4)

// cart.addItem(product1)
// cart.addItem(product2)

// console.log(`Before discount total: ${cart.getTotal()}`)

// const discount = new Discount(10)
// const finalCart = FinalCart(cart, discount)
// console.log(`After Discount total: ${finalCart.applyDiscount(finalCart.applyBulkDiscount())}`)

// const cartCopy = {...cart, items:[...cart.items, new Product("Tablet", 300, 2)]}
// console.log(`New cart copy total: ${cartCopy.getTotal?.()}`);

// console.log("Optional Chaining - Product Price:", cart.items[0]?.price ?? "Price not available");


// Task 3


// function Event(eventName, date, availableSpots) {
//     this.eventName = eventName;
//     this.date = date;
//     this.availableSpots = availableSpots;
  
//     this.registerUser = function() {
//       if (this.availableSpots > 0) {
//         this.availableSpots -= 1;
//         console.log(`Successfully registered for ${this.eventName}. Spots remaining: ${this.availableSpots}`);
//       } else {
//         console.log(`Sorry, no available spots left for ${this.eventName}.`);
//       }
//     };
//   }
  
//   function RegistrationSystem() {
//     this.events = [];
  
//     this.addEvent = function(event) {
//       this.events = [...this.events, event];
//     };
  
//     this.removeEvent = function(eventName) {
//       this.events = this.events.filter(event => event.eventName !== eventName);
//     };
  
//     this.listEvents = function() {
//       this.events.forEach(event => {
//         console.log(`${event?.eventName}: ${event?.availableSpots} spots remaining`);
//       });
//     };
  
//     this.findEvent = function(eventName) {
//       return this.events.find(event => event?.eventName === eventName);
//     };
  
//     this.getFullEvents = function() {
//       return this.events.filter(event => event?.availableSpots === 0);
//     };
  
//     this.listEventNamesAndSpots = function() {
//       this.events.forEach(event => {
//         const { eventName, availableSpots } = event ?? {}
//         console.log(`Event Name: ${eventName}, Available Spots: ${availableSpots}`)
//       });
//     };
//   }
  
//   const event1 = new Event('Coding Bootcamp', '2025-02-15', 20)
//   const event2 = new Event('Design Workshop', '2025-02-20', 5)
//   const event3 = new Event('Data Science Seminar', '2025-03-01', 0)
  
//   const system = new RegistrationSystem();
  
//   system.addEvent(event1)
//   system.addEvent(event2)
//   system.addEvent(event3)
  
//   system.listEvents()
  
//   event1.registerUser()
  
//   console.log(system.findEvent('Design Workshop'))
  
//   console.log('Full Events:')
//   console.log(system.getFullEvents())
  
//   system.listEventNamesAndSpots()
  