//Immediately Invoked Function Expression (IIFE)

// (function chai() {
//     console.log(`db connected`);    
// })()

//to not pollution from the global scopes variables or methods

(function chaiaur(){
    //named IIFE
    console.log(`db connected`);
})();

( (name)=>{
    console.log(`db connected ${name}`);
})('hitesh');

