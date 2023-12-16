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
console.log(loginUserMessage("hduhd"));




