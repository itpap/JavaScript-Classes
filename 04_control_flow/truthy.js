const userEmail = "prahsh@gmail"

// if (userEmail) {
//     console.log("got user email");
// }else {
//     console.log("dont got it");
// }

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy vales

// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("arrays is empty");  
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}



//nullish coalescing operator (??)::null undefined

let val1;
val1 = 5??10
val1 = null??10
val1 = undefined??null
val1 = undefined??null??20

console.log(val1);

//ternary operator

// condtion ? true :false

const iceTeaprice = 200

iceTeaprice >= 80 ? console.log("more than 80"): console.log("less than 80");




