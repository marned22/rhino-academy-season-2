const numbers = [1, 2, 3, 4, 5, 6];

function calculateEvenNumbers(num) {
    let sum = 0
    for(i = 0; i < num.length; i++) {
         if (num[i] % 2 === 0) {
            sum += num[i];
         }
    }
    return sum;
}

const sumOfEven = calculateEvenNumbers(numbers);
console.log(sumOfEven);
