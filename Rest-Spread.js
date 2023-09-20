function addNumbers(...numbers) {
    let result = 0
    for(let sum of numbers){
        result += sum
    }
    return result
}

console.log('Sum of the four numbers: ' + addNumbers(1,2,3,4))
//Using spread operator
let array = Array()
newArray = [...array,1,2,3,4]
console.log('Array using spread operator: ' + newArray)

//Using the rest parameter
function newFunction(...numbers) {
    let restArray = []
    for(let sum of numbers){
        restArray.push(sum)
    }
    return restArray
}

console.log("Array using the rest parameter: " + newFunction(1,2,3,4))