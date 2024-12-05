const numbers = [-10, 15, -25, 99, -63, 37, -52, 105, -33, 29]

function filterNumbers(numbers, numberLimit) {
    return numbers.filter((number) => number > 0 && number < numberLimit)
}

console.log(filterNumbers(numbers, 50));
