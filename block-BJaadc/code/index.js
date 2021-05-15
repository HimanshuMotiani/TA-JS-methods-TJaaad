let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(message.length);
// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`The first character of [message] is ${charAt(0)}`);
// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`The first character of [message] is ${message.length -1}`);
// Log the index of word "you" in message
console.log(message.indexOf("you"))
// Log the index of word "still" in message
console.log(message.indexOf("still"));
// Log the index of word "answers" in message
console.log(message.indexOf("answers"))
// Log true or false based on whether the word "answers" exist in message or not
message.indexOf("answers") !== -1 ? console.log("true") : console.log("false");
// Log true or false based on whether the word "they" exist in message or not
message.indexOf("they") !== -1 ?console.log("true") : console.log("false");
// Log true or false based on whether the word "is" exist in message or not
message.indexOf("is") !== -1 ? console.log("true") : console.log("false");
// Log true or false based on whether the word "Is" exist in message or not
message.indexOf("Is") !== -1 ? console.log("true") : console.log("false");
// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
message.slice(3, 6)  == "you" ? console.log("true") : console.log("false");
// Check and log whether the word from index 7 to 8 is "a" or not
message.slice(7,8) == "a" ? console.log("true") : console.log("false");
// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
message.slice(-3) == "no!" ? console.log("true") : console.log("false");
// Check and log whether the last 5 character in message is "no!" or not
message.slice(-5)  == "no!" ? console.log("true") : console.log("false");
// Log the message variable, all in lowecase
console.log(message.toLowerCase());
// Log the message variable, all in uppercase
console.log(message.toUpperCase());
// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
let newMessage= message.replace("are", "can't");
console.log(newMessage)
// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
newMessage= message.replace("still", "");
console.log(newMessage)
// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
newMessage= message.replace("thinking", "decide");
console.log(newMessage)
// Log all the characters from the message variable (you can user for..of loop on string)
for(val of message){
    console.log(val)
}
// Split all the words in message (split by " " space) and store it in a variable messageArray
let messageArray = message.split(" ");

// Log all the words of messageArray
for
console.log(messageArray)