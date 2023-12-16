// singleton

//objects literals

// Object.create
//const mySym = Symbol("key1")


const jsuser = {
    name:"prashant",
    "full name": "Prashnat pawar", //
    [mySym]: "mykey1",
    age:24,
    location: "Sangli",
    email: "prashnajhkk@jhhh",
    isloggedIn: false,
    lastlogiDays: ["manday", "Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["name"]);
// console.log(jsuser.mySym);
// console.log(typeof jsuser.mySym);
// console.log(jsuser[mySym]);// strictly for interview perpose



jsuser.email = "prashnatpawar.com"
// Object.freeze(jsuser)
jsuser.email = "prashnatpawar.com"
console.log(jsuser);
 

jsuser.greeting = function() {
    console.log("Hello Js user");
}
// console.log(jsuser.greeting);
// console.log(jsuser.greeting());//it gives funstion return not execute the function
// console.log(jsuser.greeting());//it gives funstion return not execute the function


jsuser.greeting2 = function() {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greeting2);
console.log(jsuser.greeting2());













