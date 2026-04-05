//addition, subtraction, division, multiplication

const history = [ 0 ] 
//array for storing the history of calculations oerformed by the user


//below is a function used to add the numbers prompted by the user
function additionOfNumbers(a,b){
    let sum = a+b
    return sum  
}

let result = additionOfNumbers(30,20)
console.log(result)
history.push(result)
// the above adds the recently done calculation to the end of the array



// the function above subtracts the numbers prompted by the user
function subtractionOfNumbers(a,b){
    let subtraction = a-b
    return subtraction
}
let output = subtractionOfNumbers(40,30)
console.log (output)
history.push(output)

//multiplies the numbers prompted by user
function multiplicationOfNumbers(a,b){
let multiplication = a*b
return multiplication
}
let display = multiplicationOfNumbers(60,8)
console.log (display)
history.push(display)

//this one divides the numbers
function divisionOfNumbers(a,b){
    if (b === 0){ 
      return  "Math Error"  //this is used to display an error if the user tries to divide numbers by o
    } else {  
let division = a/b
return division
} 
}  
let release = divisionOfNumbers(60,8)
console.log (release)
history.push(release)


release = divisionOfNumbers (20, 0)
console.log(release)
history.push(release)




