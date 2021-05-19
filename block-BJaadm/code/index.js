let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map(x => {
  return x.name;
});
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(x => {
  return x.grade;
})
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(x => {
  return x.sex;
}
);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filteredName = peopleName.filter(x => {
  return x.startsWith("J") || x.startsWith("P")
})
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filteredLength = peopleName.filter(x =>
  x.startsWith("A") || x.startsWith("C")
).map(x => x.length);
// Log all the filtered male ('M') in persons array
let male = persons.filter(
  x => {
    return x.sex == "M"
  }
);
// Log all the filtered female ('F') in persons array
let female = persons.filter(
  x => {
    return x.sex == "F"
  }
);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filteredFemale = persons.filter(x => {
  return (x.sex == "F") && (x.name.startsWith("C") || x.name.startsWith("J"))
})
// Log all the even numbers from peopleGrade array
let even = peopleGrade.filter(x=>{
return x % 2 ==0
})
// Find the first name that starts with 'J' in persons array and log the object
let jNames = persons.find(x =>{
  return x.name.startsWith("J");
})
console.log(jNames);
// Find the first name that starts with 'P' in persons array and log the object
let pNames = persons.find(x =>{
  return x.name.startsWith("P");
})
console.log(pNames);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let filtered = persons.find(x => {
  return (x.sex == "F") && x.name.startsWith("J") && x.grade > 10
})
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(x => {
  return (x.sex == "F") 
})
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(x => {
  return (x.sex == "M") 
})
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc,cv)=>{
  acc += cv.grade 
  return acc;
},0)
// Find the average grade
let avg = persons.reduce((acc,cv)=>{
  return acc + cv.grade;
},0)/persons.length

// Find the average grade of male
let countMale = 0;
let avgMale = persons.filter(x=>{
  if(x.sex == "M"){
    countMale = countMale + 1
  return x;
}
}
).reduce((acc,cv)=>{
  return acc += cv.grade
},0)/countMale;

// Find the average grade of female
let countFemale = 0;
let avgFemale = persons.filter(x=>{
  if(x.sex == "F"){
    countFemale = countFemale + 1
  return x;
}
}
).reduce((acc,cv)=>{
  return acc += cv.grade
},0)/countFemale;
// Find the highest grade
console.log(peopleGrade.sort((a,b) => a-b).pop());
// Find the highest grade in male
let highGradeMale = persons.filter(x=>{
  return x.sex == "M"
}).sort((a,b) => a-b).pop();
// Find the highest grade in female
let highGradeFemale = persons.filter(x=>{
  return x.sex == "F"
}).sort((a,b) => a-b).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let highGrade =persons.filter(x=> {
  return x.name.startsWith('J') || x.name.startsWith('P')
}).sort((a,b) => a-b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log( peopleGrade.sort((a,b) => a-b));
// Sort the peopleGrade in descending order
console.log( peopleGrade.sort((a,b) => b -a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log( [...peopleGrade].sort((a,b) => b -a));
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort());
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());