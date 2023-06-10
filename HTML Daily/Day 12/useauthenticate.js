const auth=require("./autheticate");
console.log(auth.validate("user1","pass1"))
console.log(auth.validate("user1","pass3"))

console.log(auth.addnew("user4","pass4"))
console.log(auth.addnew("user1","pass4"))