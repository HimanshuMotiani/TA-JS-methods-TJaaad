Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
-Paramter: no parameter is required
-Return : new string coverted to upper case.
-Example :
```js
let name = 'Arya Stark';
     name.toUpperCase();  //"ARYA STARK"
     ```
     - toLowerCase: covert to upper case;
3. `toLowerCase`
-Paramter: no parameter is required
-Return : new string coverted to lower case.
-Example :
```js
let name = 'Arya Stark';
     name.toUpperCase();  //"arya stark"
     ``` 
- toLowerCase: covert to lower case;
4. `trim`
-Parameter: empty
-Return: return a trimmed string (strin data type)
let name = 'Arya Stark   ';
let user="   himanshu"
let bio="     learning full stack development   "
name.trim();//"Arya Stark"
bio.trim();// "learning full stack development"
user.trim();// "himanshu"
-trim - removes whitespace from both ends of a string
5. `trimEnd`
-Parameter: empty
-Return: return a trimmed string (strin data type)
let name = 'Arya Stark   ';
let user="   himanshu"
let bio="     learning full stack development   "
name.trimEnd();//"Arya Stark"
bio.trimEnd();// "   learning full stack development"
user.trimEnd();// "   himanshu"
-trimEnd - removes whitespace from end of the a string

6. `trimStart`
-Parameter: empty
-Return: return a trimmed string (strin data type)
let name = 'Arya Stark   ';
let user="   himanshu"
let bio="     learning full stack development   "
name.trimStart();//"Arya Stark   "
user.trimStart();// "himanshu"
bio.trimStart();// "learning full stack development   "
-trimStart - removes whitespace from start of the a string
7. `concat`
-Parameter: One or more strings to concatenate to str

-Return: return a strinig

let name = 'Arya';
let user="Himanshu"
let bio="learning full stack development"

name.concat("Stark"); // "AryaStark"
user.concat("Himanshu","Motiani");// "HimanshuHimanshuMotiani"
bio.concat(", is cool");// "learning full stack development, is cool"
-concat - concatenates the string arguments to the calling string
8. `endsWith`
-Parameter: string to check if its exists on end or not and a optional length

-Return: true or false (boolean data type)

let name = 'Arya Stark';
let user="Himanshu"
let bio="learning full stack development"

name.endsWith("Stark",10); // true
user.endsWith("Sing");// false
bio.endsWith("development");// true
-endsWith - determines whether a string ends with the characters of a specified string
9. `includes`
-syntax: includes(searchString, position)
-"searchString"
A string to be searched for within str.
-"position" Optional
The position within the string at which to begin searching for searchString. (Defaults to 0.)
-Parameter: A string to be searched for within str and The position within the string at which to begin searching for searchString. (Defaults to 0.)

-Return: true or false (boolean data type)

let name = 'Arya Stark';
let user="Himanshu"
let bio="learning full stack development"

name.includes("Stark"); // true
bio.includes("stack"); //false
bio.includes("stack",14) //true
bio.includes("development",15) //true
includes : determine whether one string may be found within another string
10. `indexOf`
-syntax: indexOf(searchString, position)

-Parameter: a string and position in number

-Return: return a number

let name = 'Arya Stark';
let user="Himanshu"
let bio="learning full stack development"

name.indexOf("A"); // 0
bio.indexOf("Stack"); //14
bio.indexOf("adaf",14) //-1
'Blue Whale'.indexOf('Blue')      // returns  0
'Blue Whale'.indexOf('Blute')     // returns -1
'Blue Whale'.indexOf('Whale', 0)  // returns  5
'Blue Whale'.indexOf('Whale', 5)  // returns  5
'Blue Whale'.indexOf('Whale', 7)  // returns -1
'Blue Whale'.indexOf('')          // returns  0
'Blue Whale'.indexOf('', 9)       // returns  9
'Blue Whale'.indexOf('', 10)      // returns 10
'Blue Whale'.indexOf('', 11)      // returns 10
'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 0) // returns 0
'hello world'.indexOf('', 3) // returns 3
'hello world'.indexOf('', 8) // returns 8
'hello world'.indexOf('', 11) // returns 11
'hello world'.indexOf('', 13) // returns 11
'hello world'.indexOf('', 22) // returns 11
The index of the first occurrence of searchValue, or -1 if not found.

An empty string searchValue produces strange results. With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value:
However, with any fromIndex value equal to or greater than the string's length, the returned value is the string's length:
-indexOf : returns the index of the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found
11. `lastIndexOf`
-syntax: lastIndexOf(searchString,fromIndex )
-"searchValue"
A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.
"fromIndex" Optional
The index of the last character in the string to be considered as the beginning of a match. The default value is +Infinity. If fromIndex >= str.length, the whole string is searched. If fromIndex < 0, the behavior will be the same as if it would be 0.
-Parameter: a string and position

-Return: return a number

let name = 'Arya Stark';
let user="Himanshu"
let bio="learning full stack development"

bio.lastIndexOf(`a`); // 16
bio.lastIndexOf(`a`, 15) // 2
bio.indexOf("adaf",14) //-1
-lastIndexOf : returns the index of the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
12. `padEnd`
-syntax: padEnd(targetLength, padString)

-Parameter: a target length in number data type and a string to pad
-"targetLength"
The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
"padString" Optional
The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated:
-Return: return the padded string

'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);
padEnd: pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`
-syntax: padStart(targetLength, padString)
"targetLength"
The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
"padString" Optional
The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end. The default value is " " (U+0020 'SPACE').
-Parameter: a target length in number data type and a string to pad

-Return: return the padded string
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);
-padStart: pads the current string with given string (rmultiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
14. `repeat`
-syntax: str.repeat(count)

-Parameter: a count as number

-Return: return the repeated string

'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError
repeat: method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
15. `replace`
-syntax: str.replace(substr, newSubstr)

-Parameter: two strings, first to match and second to replace

-Return: A new string, with some or all match replaced by a replacement.

let user="Himanshu"
let bio="learning full stack development"

user.replace("i", "iii"); //""Hiiimanshu""
bio.replace("full","") //"learning  stack development"
-replace: The replace() method returns a new string with some or all matches replaced by a replacement
16. `slice`
syntax: slice(startIndex, endIndex[optional])
"beginIndex"
The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0.

If beginIndex is greater than or equal to str.length, an empty string is returned.

"endIndex" Optional
The zero-based index before which to end extraction. The character at this index will not be included.

If endIndex is omitted or undefined, or greater than str.length, slice() extracts to the end of the string. If negative, it is treated as str.length + endIndex. (For example, if endIndex is -3, it is treated as str.length - 3.) If it is not undefined, and Number(endIndex) is not positive, an empty string is returned.

If endIndex is specified, endIndex should be greater than beginIndex, otherwise an empty string is returned. (For example, slice(-3, 0), slice(-1, -3), or slice(3, 1) returns "".)
Parameter: two index, first to start from and second which is optonal to end(does not include last)

Return: A new string

let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""
slice: extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`
-syntax: split(separator, limit[optional])

-Parameter: seperator is a string and limit is number which is optional

-Return: An array of strings

let user="Deepak"
let bio="learning full stack development"

user.split(""); //["D", "e", "e", "p", "a", "k"]
bio.split(" ") //["learning", "full", "stack", "development"]
bio.split("") // ["l", "arning full stack d", "v", "lopm", "nt"]
-split: divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

18. `substring`
-syntax: substring(startIndex, indexEnd[optional])

-Parameter: two index as number data type

-Return: a string

let user="Deepak"
let bio="learning full stack development"

user.substring(1, 3); // "ee"
bio.substring(5); // "ing full stack development"
-substring: returns the part of the string between the start and end indexes, or to the end of the string..
