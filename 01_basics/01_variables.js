const accountId = 29423942   //For Constant values
let accountEmail = "apoorvasharma22@gmail.com"

/*Prefer not to use var because of the block scope and 
functional scope issue.*/
var accountPassword = "12345678"

//This is also not correct way to declare without any keyword
accountCity = "Pune"

//By default value is undefined
let accountState

//accountId = 2 //not allowed
accountEmail = "AP@AP.com"
accountPassword = "ede"
accountCity = "Haldwani"

//console.log(accountId)

console.table([accountEmail, accountPassword, accountPassword, 
 accountCity])

console.log(accountState)