const arr = (numbers) => {
    if(numbers.length === 0) {
        return 0
    }

    return numbers[0] + arr(numbers.slice(1))
}

numbers = [1,2,3,4,5]

console.log(arr(numbers));
