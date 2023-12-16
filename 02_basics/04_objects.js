// const tinderUser = new Object() singleton object

const tinderUser = {}

tinderUser.tinderUser = "123avsd"
tinderUser.name = "prashnat"
tinderUser.isloggedin= false

// console.log(tinderUser);

const regularuser = {
    emial: "skon@gmaol",
    fullnmae: {
        userfullname: {
            firstname: "prahsjj",
            lastname: "pawdd"
        }
    }
}
// console.log(regularuser.fullnmae.userfullname.lastname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}  
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "bjhj@gmail.com"
    },
    {
        id: 1,
        email: "bjhj@gmail"
    },
    {
        id: 1,
        email: "bjhj@gmail"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isloggedin"));
 

