const arr = (numbers) => {
    let sum = 0;
    for(i = 0;i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum;
}

numbers = [1,2,3,4,5]

console.log(arr(numbers));
