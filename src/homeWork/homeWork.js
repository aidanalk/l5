// our task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let digits = String(n).split('')
    let sortedDigits = digits.sort(function(a, b) {
        return b - a;
    })
    let result = parseInt(sortedDigits.join(''))
    
    return result;
}


console.log(descendingOrder(628976513))
console.log(descendingOrder(145263))
console.log(descendingOrder(123456789))

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
    const binaryA = a.toString(2)
    const binaryB = b.toString(2)
    const binarySum = (parseInt(binaryA, 2) + parseInt(binaryB, 2)).toString(2)
    
    return binarySum;
}

console.log(addBinary(1, 1))
console.log(addBinary(5, 9))