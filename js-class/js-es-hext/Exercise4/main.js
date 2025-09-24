// Exercise 4


// Old solution

// const numbers = [1, 2, 3, 4, 5, 6];

// function calculateEvenNumbers(num) {
//     let sum = 0
//     for(i = 0; i < num.length; i++) {
//          if (num[i] % 2 === 0) {
//             sum += num[i];
//          }
//     }
//     return sum;
// }

// const sumOfEven = calculateEvenNumbers(numbers);
// console.log(sumOfEven);

// New solutions

// function sumEven(...numbers){
//     console.log(numbers);
//     return numbers
//          .flatMap(num => (num % 2 === 0 ? [num] : []))
//          .reduce((a, b) => a + b, 0)
// }

// console.log(sumEven(1, 2, 3, 4, 5, 6));


// Old solutions

// function isEligibleForDiscount(customerType) {
//     if(customerType === "premium") {
//         console.log('Eligible');
//         return true;
//     } else(customerType === "regular"); {
//         console.log('Not eligible');
//         return false;
//     }
// }

// function calculateDiscount(price, percentage) {
//     return discountAmount = price * percentage / 100
// }

// function finalPrice(price, discountAmount) {
//     return price - discountAmount
// }

// function customer(customerType, price, percentage){
//     const discountAmount = calculateDiscount(price, percentage);
//     const finalPriceValue = finalPrice(price, discountAmount);
//     if(isEligibleForDiscount(customerType)){
//         console.log(`Price: $${price}`);
//         console.log(`Discount Amount: $${discountAmount}`);
//         console.log(`Final Price: $${finalPriceValue}`);
//     } else {
//         console.log('You dont have a discount ');
//     }
// }

// customer("regular",500, 25)
// customer("premium",1000, 25)

// new solution


// import { isEligibleForDiscount, calculateDiscount, finalPrice} from "./helpers.js"

// function customer(customerType, price, percentage){
//     if(isEligibleForDiscount(customerType)){
//         const discountAmount = calculateDiscount(price, percentage);
//         const finalPriceValue = finalPrice(price, discountAmount);
//         console.log(`Price: $${price}`);
//         console.log(`Discount Amount: $${discountAmount}`);
//         console.log(`Final Price: $${finalPriceValue}`);
//     } else {
//         console.log('You dont have a discount ');
//     }
// }

// customer("regular",500, 25)
// customer("premium",1000, 25)

// old solution

// function calculatePoints(results) {
//     let totalPoints = 0;
  
//     for (let i = 0; i < results.length; i++) {
//       const result = results[i];
  
//       const team1Score = parseInt(result.charAt(0));
//       const team2Score = parseInt(result.charAt(2));
      
//       if (team1Score > team2Score) {
//         totalPoints += 3;
//       } else if (team1Score < team2Score) {
//         totalPoints += 0;
//       } else {
//         totalPoints += 1;
//       }
//     }
  
//     return totalPoints;
//   }
  
//   const results = ["2:0", "1:1", "2:2", "0:3", "5:2"];
//   console.log(calculatePoints(results));

// new solution

// import { results } from './constants.js'

// function calculatePoints(results) {
//     let totalPoints = 0;
  
//     for (const result of results) {
  
//       const team1Score = parseInt(result.charAt(0));
//       const team2Score = parseInt(result.charAt(2));
      
//       if (team1Score > team2Score) {
//         totalPoints += 3;
//       } else if (team1Score < team2Score) {
//         totalPoints += 0;
//       } else {
//         totalPoints += 1;
//       }
//     }
  
//     return totalPoints;
//   }
  
// console.log(calculatePoints(results));


// old solution 

// function totalSalary(employees) {
//     console.log(employees)
//     let total = 0
//     for(let salary in employees) {
//         total += employees[salary]
//     }
//     return total;
// }

// const employees = {
//     Zoran: 15000,
//     Goran: 20000,
//     Martina: 25000,
//     Zorica: 12300
// }

// console.log("The total salary is: ",totalSalary(employees))


// new solution

// import { employees } from "./constants.js";

// let totalValue = 0

// for(const [key, value] of Object.entries(employees)) {
//     console.log(`${key}: ${value}`);
//     totalValue += value
// }

// console.log('Total value is: ', + totalValue);
// let value = 'value'
// value = value.replaceAll('e', 'eeeeee')
// console.log(`Total ${value} is: ${totalValue}`);

