//Primitive

// 7 types String, Number, Boolean, BigInt, Null, undefined, Symbol
const name  = "Apoorva"
const age = 37
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) //false

const bigNumber = 1234567890123456789012345678901234567890n

//Reference (Non-Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Apoorva Sharma",
    age: 37,
}

const myFunction = function (){
    console.log("Hello World")
}

//To see the DataType
console.log(typeof bigNumber) //bigint

console.log(typeof outsideTemp) //object
//Null ka dataType is Object always in javascript, 
// this is a bug in JS

// ++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (Reference) Memory - Non-Primitive
//Stack - We get the copy
let myName = "Apoorva" //Primitive
let anotherName = myName

//console.log(anotherName) //Apoorva

anotherName = "Apoorva Sharma"

console.log(anotherName) //Apoorva Sharma
console.log(myName) //Apoorva

//Non-Primitive - Reference Type
//We get the actual reference to the original object in the heap memory
let userOne = {
    email: "apoorva@google.com",
    name: "Apoorva"
}

let userTwo = userOne

//console.log(userTwo.email) //apoorva@google.com
userTwo.email = "apoorvaSharma@google.com"
console.log(userOne.email) //apoorvaSharma@google.com
console.log(userTwo.email)//Stack - We get the copy
