let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
  
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words){
console.log(words.sort((a,b) => a.length - b.length).pop());
//OR
let maxLength= Number.MIN_VALUE;
let word = ""
words.forEach(ele => {
  if(ele.length > maxLength){
    maxLength = ele.length;
    word = ele;
  }
});
console.log(word);
}
// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map(x=>{ return x.length }));
// - Create a new array that only contains word with atleast one vowel.
let vowels = words.filter(x =>{
  return x.includes("a") || x.includes("e") || x.includes("i") || x.includes("o") || x.includes("u")
});
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
let noVowelStart = words.filter(x =>{
  if(x.startsWith("a") || x.startsWith("e") || x.startsWith("i") || x.startsWith("o") || x.startsWith("u")){
    return false;
  }
  else return true;
});
// - Create a new array that contianse words not ending with vowel
let noVowelEnd = words.filter(x =>{
  if(x.endsWith("a") || x.endsWith("e") || x.endsWith("i") || x.endsWith("o") || x.endsWith("u")){
    return false;
  }
  else return true;
});
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr){
  let sum = 0;
  arr.forEach(x=> {
    sum = sum + x; 
  }
    )
    return sum;
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

  console.log(numbers.map(x=> {
    return x * 3; 
  }
));
    

// - Create a new array that contains only even numbers
console.log(numbers.filter(x=> {
  return x % 2 == 0; 
}
));
// - Create  a new array that contains only odd numbers.
console.log(numbers.filter(x=> {
  return x % 2 !== 0; 
}
));
// - Create a new array that should have true for even number and false for odd numbers.
numbers.filter(x=> {
   if(x % 2 !== 0)
   return true;
   else return false
}
)
// - Sort the above number in assending order.

// - Does sort mutate the original array?

// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
