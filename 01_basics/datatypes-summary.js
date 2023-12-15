// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



const outsideTemp = "ssss" 
let userEmail;

const id = Symbol('1230')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigN = 12133

// Reference type or Non Primitive

// Array, Objects, Functions

const heros = ["shakti", "ironman", "Captain-America"];
let myObj = {
    name : "prahshant",
    age : 22
}

const myFunction = function(){
    console.log("Hello word");
}

console.log(typeof outsideTemp);


/*

null  --> object
undefined --> undefined
function ---> function
Arrays, Object --> object
bigInt --> BigInt
number --> number
symbol --> Symbol
String --> String

*/








