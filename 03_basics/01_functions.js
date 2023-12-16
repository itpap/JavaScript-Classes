function sayMyname(){
    console.log("h");
    console.log("h");
    console.log("g");
    console.log("u");
    console.log("u");
    console.log("u");
}

// console.log(sayMyname());

// function addTwoNumbers(num1,num2) { //parameters

//     console.log( num1 + num2);
// }

function addTwoNumbers(num1,num2) { //parameters

    //  let result = num1 + num2
    //  return result                  //this result  scope is valid only for this block
    //  console.log("pras");//after returning no any execution happen
    return num1+num2          

}

const result = addTwoNumbers(3, 2) //arguments
//this result have a global scope

// console.log("result: ",result);


function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("histesh"));
// console.log(loginUserMessage("hduhd"));



function calculateCartPrice(val1, val2, ...num1) {  //... is rest operator or spread operator depending upon situation 
    return num1
}

// console.log(calculateCartPrice(222,333,444));


const user = {
    username: "hitesh",
    price: 1999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray = [2000,333,66,999]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2000,333,66,999]));


