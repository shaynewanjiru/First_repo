const fruits = ["apple", "watermelon", "passion"]
console.log(fruits[0])
console.log(fruits.length) //gives size of array
//common array operations
fruits.push("Grapes")
//adds item to the array
console.log(fruits)
//pop removes item from array
fruits.pop()
console.log(fruits)
//unshift adds item to an array
fruits.unshift("cranberry")
console.log(fruits)
// .forEach() .map() .filter() .find() .reduce()
const user ={
    "name" : "Joseph",
    "hobbies" : ["cycling" , "Programming"],
    "issStudent" : false,
    "Systemid" : 5754
}

console.log(user.name) //access via dot notation or square brackets
console.log(user["hobbies"])
//adds key on the go
user.fav_meal = "beef"
console.log(user)
// modify valuues on the o
user.issStudent = true
console.log(user.issStudent)