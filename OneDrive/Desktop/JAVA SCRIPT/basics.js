let user_name = "SHAYNE WANJIRU"
console.log(user_name)
user_name = "jane"
console.log("user_name")
const workplace = "Moringa School"
console.log(workplace)
let str = "Hello"
let num = 42 
let num2 = 43.34
let bool = true 
let undef; // undefined 
let empty = null  //null empty 

let obj = {
    "name" : "Shayne" 

}
console.log(obj["name"])

let a = 5
let b =11
console.log(b / a)
console.log(b + a)
console.log(b % a)

let z = 13
z++
console.log(z)
++z
console.log(z)
--z
console.log(z)
z--
console.log(z)

let y = 10
y +=5
console.log(y)
y %=3
console.log(y)
console.log(5 ==="5")
console.log(4 === 4)


let isloggedIn = true
let isAdmin = false
if(isloggedIn && isAdmin){
    console.log("CREDENTIALS VERIFIED")
} else{
    console.log("CREDENTIALS NOT VERIFIED")
}

if(isloggedIn || isAdmin){
    console.log("CREDENTIALS VERIFIED")
} else{
    console.log("CREDENTIALS NOT VERIFIED")
}

let age = 18
if(age > 18){
    console.log("adult")
}else if(age === 18){
    console.log("JUST GOT MY ID!!")
}else if(age < 18){
    console.log("minor")
}

let role = "admin"
switch(role){
    case "admin":
        console.log("admin")
        break;
    case "staff":
        console.log("staff")
        break;
    default:
        console.log("no access")
}
for(let h = 1; h <= 8; h++) {
    console.log(h)}

let h = 0
while(h < 5){
    console.log(h)
    h++
}

a = 5
b = 13
function add(a,b) {
    return a + b;
    
}
function greet(){
    return "hello shayne"

}
greet()
result (z)
let appName="myApp"

function showApp() {
    let message = "Hello Shayne"
    console.log()
}