const score = 400
// console.log(score)

const balance  = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(4))

const otherNumber = 1123.923456
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN")) //1,00,00,000
// console.log(hundreds.toLocaleString("en-US")) //10,000,000
   
//++++++++++++++++Math+++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-55)) //Converts negative to positive
// console.log(Math.round(4.6)) //5 --Takes nearest value
// console.log(Math.floor(4.9)) //4 -- Takes lower value always
// console.log(Math.ceil(4.1)) //5 ---Takes higher value always
// console.log(Math.min(0, 150, 30, 20, -8, -200)) //-200
// console.log(Math.max(0, 150, 30, 20, -8, -200)) //150

// console.log(Math.random()) //0 to 1
// console.log(Math.random() * 10) //0 to 10
// console.log(Math.random() *10 +1) //0 to 9
// console.log(Math.floor(Math.random() * 10 +1)) //1 to 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //10 to 20
Math.random() *(max-min+1)