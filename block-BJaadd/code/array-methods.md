Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
join()
join(seperator)
- Parameter: Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
   - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
   - Example:
     ```js
     const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'
     ```
   - No it does not mutate the original array
3. `flat`
flat()
flat(depth)
- Parameter: "depth" Optional
The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
  const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
     ```
   - `flat` The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - No it does not mutate the original array
4. `push`
push(element0)
push(element0, element1)
push(element0, element1, ... , elementN)
- Parameter: elementN
The element(s) to add to the end of the array.
   - Return: The new length property of the object upon which the method was called
     ```js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
     ```
   - `push` The push() method adds one or more elements to the end of an array and returns the new length of the array.
   - No it mutates the original array
5. `indexOf`
indexOf(searchElement)
indexOf(searchElement, fromIndex)
- Parameter: "searchElement"
Element to locate in the array.
"fromIndex" Optional
The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).

   - Return: The first index of the element in the array; -1 if not found
   - Example:
     ```js
     var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
     ```
   - `indexOf` The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array
6. `lastIndexOf`
- Parameter: "searchElement"
Element to locate in the array.
"fromIndex" Optional
The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
   - Return: The last index of the element in the array; -1 if not found.
   - Example:
     ```js
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3

     ```
   - `lastIndexOf` The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
   - No it does not mutate the original array
7. `includes`
- Parameter: "searchElement"
The value to search for.

Note: When comparing strings and characters, includes() is case-sensitive.

"fromIndex" Optional
The position in this array at which to begin searching for searchElement.

The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search).

Defaults to 0.
   - Return: A Boolean which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0.


   - Example:
     ```js
     const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
[1, 2, 3].includes(2)      // true
[1, 2, 3].includes(4)      // false
[1, 2, 3].includes(3, 3)   // false
[1, 2, 3].includes(3, -1)  // true
[1, 2, NaN].includes(NaN)
     ```
   - `includes` The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
   - No it does not mutate the original array
8. `reverse`
reverse()
- Parameter: no parameter
   - Return: The reversed array
   - Example:
     ```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
     ```
   - `reverse` The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first
   - No it does not mutate the original array
9. `every`
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )
- Parameter: callbackFn
A function to test for each element, taking three arguments:
element
The current element being processed in the array.
index Optional
The index of the current element being processed in the array.
array Optional
The array every was called upon.
thisArg Optional
A value to use as this when executing callbackFn.

   - Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
   - Example:
     ```js
 const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
     ```
   - `every` The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
   - No it mutates the original array
10. `shift`
shift()
- Parameter: no paramETER
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
     ```
   - `shift` The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
   - No it mutates the original array
11. `splice`
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
- Parameter: start
The index at which to start changing the array.

If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.

If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.

deleteCount Optional
An integer indicating the number of elements in the array to remove from start.

If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.

If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

item1, item2, ... Optional
The elements to add to the array, beginning from start. If you do not specify any elements, splice() will only remove elements from the array.
   - Return: An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.
   - Example:
     ```js
     const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
     ```
   - `splice` The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
   - No it mutates the original array
12. `find`
find((element) => { ... } )
find((element, index) => { ... } )
find((element, index, array) => { ... } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)

// Inline callback function
find(function callbackFn(element) { ... })
find(function callbackFn(element, index) { ... })
find(function callbackFn(element, index, array){ ... })
find(function callbackFn(element, index, array) { ... }, thisArg)
- Parameter: callbackFn
Function to execute on each value in the array, taking 3 arguments:
element
The current element in the array.
index Optional
The index (position) of the current element in the array.
array Optional
The array that find was called on.
   - Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
   - Example:
     ```js
     const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
     ```
   - `find` The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
   - No it does not mutate the original array
13. `unshift`
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, ... , elementN)
- Parameter: The elements to add to the front of the arr.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]
let arr = [1, 2]

arr.unshift(0)               // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1)          // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3])        // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5])  // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
     ```
   - `unshift` The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
   - No it  mutates the original array
14. `findIndex`
- Parameter: callbackFn
A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.

It takes three arguments:

element
The current element being processed in the array.
index Optional
The index of the current element being processed in the array.
array Optional
The array findIndex() was called upon.
   - Return: The index of the first element in the array that passes the test. Otherwise, -1.
   - Example:
     ```js
    const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
// Arrow function
findIndex((element) => { ... } )
findIndex((element, index) => { ... } )
findIndex((element, index, array) => { ... } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function callbackFn(element) { ... })
findIndex(function callbackFn(element, index) { ... })
findIndex(function callbackFn(element, index, array){ ... })
findIndex(function callbackFn(element, index, array) { ... }, thisArg)
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
     ```
   - `findIndex` The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
   - No it does not mutate the original array
15. `filter`
filter((element) => { ... } )
filter((element, index) => { ... } )
filter((element, index, array) => { ... } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function callbackFn(element) { ... })
filter(function callbackFn(element, index) { ... })
filter(function callbackFn(element, index, array){ ... })
filter(function callbackFn(element, index, array) { ... }, thisArg)
- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
     ```
   - `filter` The filter() method creates a new array with all elements that pass the test implemented by the provided function.
   - No it does not mutate the original array
16. `flat`
17. `forEach`
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } )
- Parameter: callbackFn
Function to execute on each element. It accepts between one and three arguments:

element
The current element being processed in the array.
index Optional
The index of element in the array.
array Optional
The array forEach() was called upon.
thisArg Optional
Value to use as this when executing callbackFn.
   - Return: undefined
   - Example:
     ```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
     ```
   - `forEach` The forEach() method executes a provided function once for each array element.
   - No it does not mutate the original array
18. `map`
- Parameter: callbackFn
Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

The callbackFn function accepts the following arguments:

element
The current element being processed in the array.
indexOptional
The index of the current element being processed in the array.
arrayOptional
The array map was called upon.
thisArgOptional
Value to use as this when executing callbackFn.

   - Return: A new array with each element being the result of the callback function.


   - Example:
     ```js
 const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
     ```
   - `map` The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
   - No it does not mutate the original array
19. `pop`
pop()
- Parameter: no parameter
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
     ```
   - `pop` The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
   - No it does not mutate the original array
20. `reduce`
- Parameter: callbackFn
A function to execute on each element in the array (except for the first, if no initialValue is supplied).

It takes four arguments:

accumulator
The accumulator accumulates callbackFn's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).
currentValue
The current element being processed in the array.
index Optional
The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
array Optional
The array reduce() was called upon.
initialValue Optional
A value to use as the first argument to the first call of the callbackFn. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. Calling reduce() on an empty array without an initialValue will throw a TypeError.
   - Return: The single value that results from the reduction.
   - Example:
     ```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
     ```
   - `reduce` The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
   - No it does not mutate the original array
21. `slice`
- Parameter: "start" Optional
Zero-based index at which to start extraction.

A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

If start is undefined, slice starts from the index 0.

If start is greater than the index range of the sequence, an empty array is returned.

"end" Optional
Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.

If end is omitted, slice extracts through the end of the sequence (arr.length).

If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).


   - Return: A new array containing the extracted elements.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `slice` The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where sta
   - No it does not mutate the original array
22. `some`
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )
- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
     ```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
     ```
   - `concat` The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
   - No it does not mutate the original array
