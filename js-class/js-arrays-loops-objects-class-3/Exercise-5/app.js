const numbers = [-10, 15, -25, 99, -63, 37, -52, 105, -33, 29, -44]

function filterNumbers(numbers, numberLimit) {
    const result = []
    for (let number of numbers){
        if (number < 0){
            continue;
        }
        if (number > numberLimit){
            break;
        }
        result.push(number)
    }
    return result
}

console.log(filterNumbers(numbers, 100));
