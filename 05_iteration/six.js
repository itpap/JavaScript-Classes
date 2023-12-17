const coding = ["js", "ruby" ,"java", "python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter( (num) => num > 4 )  //call back function
// const newNums = myNums.filter( (num) => {num > 4} )   
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )   



// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [
    {title: 'book1',genre:'fiction',publish: 1881,edition:1886},
    {title: 'book2',genre:'science',publish: 1981,edition:1986},
    {title: 'book3',genre:'fiction',publish: 1971,edition:1976},
    {title: 'book4',genre:'history',publish: 1897,edition:1986},
    {title: 'book5',genre:'non-fiction',publish: 1919,edition:1926},
    {title: 'book6',genre:'fiction',publish: 1961,edition:1966},
    {title: 'book7',genre:'history',publish: 1681,edition:1686},
    {title: 'book8',genre:'non-fiction',publish: 1941,edition:1946},
];

let userbook = books.filter((bk)=>bk.genre === "history")

userbook = books.filter((bk)=> { 
    return bk.publish >= 1796 && bk.genre ==="history"} )

console.log(userbook);


































