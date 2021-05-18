// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.push("called" , "sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
strings.unshift("This")
let arr = strings.filter(ele =>
   ele.includes("is")
)
console.log(arr);
// - Find all the words that contain 'is' use string method 'indexOf'
let array =strings.filter(ele =>{
return ele.indexOf("is") !== -1;
});
console.log(array);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let threeDiv = numbers.every(x=>{
  return x % 3 == 0;
})

// -  Sort Array from smallest to largest
let num = [...numbers].sort(compareFunction)
function compareFunction(a,b){
  return a - b;
}
num = [...numbers].sort((a,b) => a-b);
console.log(num)

// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largestNum = [...numbers].sort((a,b) => a-b).pop();
console.log(largestNum);
// - Find longest string in strings
let maxStringLength = Number.MIN_VALUE;
let longString = "";
for(let  i =0; i<strings.length ;i++){
if(strings[i].length > maxStringLength){
  maxStringLength = strings[i].length;
  longString = strings[i];
}
}
console.log(longString);
console.log(maxStringLength);
//OR
let largestString = [...strings].sort((a,b) => a.length-b.length).pop();
console.log(largestString);
// - Find all the even numbers
let evenNum = numbers.filter(x=>{
  return x%2 ==0
})
// - Find all the odd numbers
let oddNum = numbers.filter(x=>{
  return x%2 !==0
})
// - Place a new word at the start of the array use (unshift)
strings.unshift("Himanshu");
// - Make a subset of numbers array [18,9,7,11]
let subArrayNum = numbers.slice(3,7);
// - Make a subset of strings array ['a','collection']
let subArrayStr = strings.slice(2,3);
// - Replace 12 & 18 with 1221 and 1881
console.log(numbers.map((x,index) =>{
  if(x == 12)
  return 1221
  else if(x== 18)
  return 1881;
  else return x
}));
// - Replace words in strings array with the length of the word
let length = 0
// strings.forEach((x,index)=>{
//   strings[index]= x.length
// length = length + x.length;
// });
// console.log(strings);
//OR
let stringLength = strings.map(str => str.length);
// - Find the sum of the length of words using above question
console.log(length)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
  { firstname: 'qqqq', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let j= customers.filter(x=>{
  return x.firstname.startsWith("J")
})
console.log(j)
// - Create new array with only first name
let firstName = customers.map(x =>
  x.firstname
)
console.log(firstName)
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = customers.map(x=>
  x.firstname.concat(" ",x.lastname)
  )
  console.log(fullName);
// - Sort the array created above alphabetically
[...fullName].sort();
console.log(fullName)
// - Create a new array that contains only user who has at least one vowel in the firstname.

let user = customers.filter(x=>{
  
  if(
    (x.firstname.toLowerCase().includes("a")) ||
    (x.firstname.toLowerCase().includes("e")) ||
    (x.firstname.toLowerCase().includes("i")) ||
    (x.firstname.toLowerCase().includes("o")) ||
    (x.firstname.toLowerCase().includes("u"))
  ){
    return true;
  }
  else return false;
});

console.log(user)
