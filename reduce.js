const arryOfNumbers = [1, 2, 3, 4,5,6]

const sum = arryOfNumbers.reduce((accumalator,currentValue) => {
    return accumalator + currentValue
})
console.log(sum) //10