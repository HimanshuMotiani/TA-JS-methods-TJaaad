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
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
