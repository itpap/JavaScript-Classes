const name = "Prashant"
const repoCount =50

console.log(name + repoCount +"value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('Prashnat')

console.log(gameName.__proto__);

// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(20));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = " hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://%hiyesh.co%m/hihihsh%20gsjhks"

console.log(url.replace('%20','-'))

console.log(url.includes('https'))

console.log(url.split('%'))
//split(seprater,limit)











