// *********************|
// *********************|
// String Probelms      |
// *********************|
// **********************

//  Q: 01 Given an integer x, return true if x is a palindrome, and false otherwise.
// console.log("Prblem:02 Given an integer x, return true if x is a palindrome, and false otherwise.");
// function display(inputParam) {
//     if((inputParam.split("").reverse().join("")) == inputParam){
//       console.log(inputParam.split("").reverse().join(""));
//     }
//     else
//     {
//       console.log("It is not palindrome");
//     }

//   }
//   var input = "121";
//   display(input);


//  Q: 02 Roman numeral to a number.
// console.log("Prblem:03 Given an integer x, return true if x is a palindrome, and false otherwise.");
// function display(inputParam) {
//     if((inputParam.split("").reverse().join("")) == inputParam){
//       console.log(inputParam.split("").reverse().join(""));
//     }
//     else
//     {
//       console.log("It is not palindrome");
//     }

//   }
//   var input = "121";
//   display(input);



//  Q: 03 Prblem:04 Return a Reverse Number.
// console.log("Prblem:04 Return a Reverse Number");
// function display(inputParam) {
//   for (let index = inputParam.length; index >= 0; index--) {
//     console.log(inputParam.charAt(index));
//   }

//   }

// var reverse = function(x) {
//   let reversed = 0;


  
//   var result = "";
//   var sign = "";
//   var toString = "";
//   if(x < 0){
//     toString =  '' + x;
//     toString = toString.slice(1); 
//     sign = "-";
//   }
//   else
//   {
//     toString =  '' + x;
//   }
//   for (let index = toString.length; index >= 0; index--) {
//   result += toString.charAt(index);
// }

// if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
//   return console.log("0");;
// } else {
//   return console.log(sign+result);
// }
  
// };
//   var input = 2147483647;
//   reverse(input);



//  Q: 04 Sqrt(x).
// console.log("Prblem:04 Sqrt(x)");
// function display(inputParam) {

// first check if number is even divide by even numbers otehrwise odd 

// then multiply every even number and compare output with input 
// if match then return otherwsie false
// 


// uploaded on leetcode 
// function sqrt(x) {
//     // Check if the input is negative or not a whole number
//     if (x < 0 || x % 1 !== 0) {
//       // If so, return null as the square root of a negative number or a fractional number cannot be found
//       return null;
//     }
    
//     // Initialize the result to 0
//     let result = 0;
    
//     // Keep looping while the square of the result is less than or equal to the input
//     while (result * result <= x) {
//       // Increment the result by 1 each iteration
//       result++;
//     }
    
//     // Return the result - 1, as the last iteration of the loop would have incremented the result above the square root
//     return result - 1;
//   }
  
  
// uploaded on leetcode 
// Here's an example code in JavaScript that determines whether a given number is a perfect square or not:

// function isPerfectSquare(num) {
//     let i = 1;
    
//     // Use a while loop to increment `i` until `i` squared is greater than `num`
//     while (i * i < num) {
//       i++;
//     }
    
//     // If `i` squared is equal to `num`, then `num` is a perfect square
//     return i * i === num;
//   }

//   console.log(isPerfectSquare(3))  

  



// Q:05 You can solve this problem by first splitting the input string into a list of color strings. Then, you can create a dictionary where the keys are the positions and the values are the corresponding color names. Iterate through the list of color strings and extract the position from each string, using it as the key to store the color name in the dictionary. Finally, iterate through the dictionary in order of the keys and concatenate the color names to build the final string. 

// Algorthim 
// split string in list of colors
// create empty ditionary
// exract keys from list
// exract values from list
// assign key and value to ditionary
// get values in object.values for sorting and save in new variable
// join all all values
// return values

// const orderColors = (str) => {
//     const listOfColors = str.split(" ");
//     const colorDit = {};

//     for (let color of listOfColors) {
//         const colorKey = parseInt(color[color.length - 1]);
//         // const colorKey = color.slice(color.lastIndexOf(' '));
//         const colorValue = color.slice(0, -1);
//         colorDit[colorKey] = colorValue;
//         // console.log(color);
//     }
//     const sortedColors = Object.values(colorDit);

//     return sortedColors;
// }

// console.log(orderColors("amjad2 kousar2 irfan1"))


// var nameValue  = "amjad1";
// console.log(nameValue[nameValue.length - 1]);



// Q:06 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type. 


// Algorthim 
// create empty stack array
// create a map with open and close brackets
// iterate loop on given string
//     if given string is eual to (,[ or {
//     the push string to stack
//     else remove from stack and store in variable
//     then check if it is not available in map then return false
// rerurn true


// const validParentheses = (str) => {

//     const stack=[];
//     const map={
//         '(':')',
//         '{':'}',
//         '[':']',
//     }

//     for(let i=0; i<str.length; i++) {
//         if(str[i] == '(' || str[i] == '{' || str[i] == '['){
//             stack.push(str[i]);
//         }
//         else {
//         const last = stack.pop();
//         if(str[i] !== map[last]){
//             return false;
//         }
//         }
//     }

//     if (stack.length !== 0) {
//         return false;
//     }

//     return true;
// }

// console.log(validParentheses("{)"))



// Q: 07 Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Algorthim 
// first remove the spaces from string
// split string into array
// get last word
// return the length of last word

// const lengthofLastWord = (str) => {
// const removeSpace = str.trim();
// const toArray = removeSpace.split(" ");
// const lastWord = toArray[toArray.length - 1];
// return lastWord.length;
// }

// console.log(lengthofLastWord("   fly me   to   the moon  "))




//  Q: 08 number to Roman numerals.
// Algorthim 
// create empty string variable
// inintialize roman numbers
// initilize numbers

// itererate loop on numbers
//    while loop (check untill provided input is less than numbers array)
// 	add numberfrom romannumbers to empty string
//       remove that value from input which is converted

const convertToRoman = (input) => {

var roman = "";
var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

for (var i = 0; i <numbers.length; i++) {
    while(input>=numbers[i]){
        roman+=romanNumeral[i];
        input-=numbers[i];
    }
}

    return roman;
}

console.log(convertToRoman("52"));




//  Q:09 Roman numeral to a number.
// initiaalize object with key and pair of roman and number
// declare variable result to o
// declare prevvalue to o
// itertate loop on provide input in reverese
// get firstcharacter from input
//   then check if firstcharacter >= prevvalue
//   add to result the firstcharacter
//   else
//   subtract firstcharacter from result
// assign prevvalue = firstcharacter in last of loop

// const convertToNumber = (input) => {
//     var roman = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     var result = 0;
//     var prevValue = 0;

//     for (var i= input.length-1; i>=0; i--) {
//         var currentValue = roman[input[i]];
//         if(currentValue >= prevValue){
//             result+=currentValue;
//         }
//         else
//         {
//             result-=currentValue;
//         }
//         prevValue = currentValue;
//     }

//     return result;
// }

// console.log(convertToNumber("IIV"));




//  Q:10 removes vowels from a string.
// define string/get input
// define array of wovels
// loop thorugh each character of string
// 	check if vowels include any character from string
// 	then replace str with blanket string


// const removeVowels = (input) => {
//     var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//     for (var i = 0; i < input.length; i++){
//         if(vowels.includes(input[i])){
//             input = input.replace(input[i],"")
//         }
//     }

//     return input;
// }

// console.log(removeVowels("Hello, World!"));




//  Q:11 Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]"

// initilize empty string to stroe the defanged version of IP Address
// loop through each character of input 
// 	check if character === . 
// 		then add "[.]" to defanged string
// 		else add orginal value to defanged string

// return defanged


// const defanged = (input) => {

//     var defangedStore = "";

//     for (var i = 0; i <input.length; i++){
//         if (input[i] === "."){
//             defangedStore += "[.]";
//         }
//         else{
//             defangedStore += input[i];
//         }
//     }


//     return defangedStore;
// }

// console.log(defanged("255.100.50.0"));




//  Q:12 You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// get two paramters one jewels another is stones
// initilize jewelSet for unique values to store the types of jewels
// loop through each character of jewels 
//         then add those characters in jewelSet 
// initinlize counter to tract the number of stones
// loop thorugh each charater of stones
//     then check if jewelsSet has character from stone 
// 	then incement counter
// return counter



// const jewelsStones = (jewels, stones) => {

//     var jewelsSet = new Set();
//     for (var i = 0; i < jewels.length; i++) {
//         jewelsSet.add(jewels[i]);
//     }

//     var counter = 0;
//     for (let index = 0; index < stones.length; index++) {
//         if (jewelsSet.has(stones[index])) {
//             counter++;
//         }

//     }


//     return counter;
// }

// console.log(jewelsStones("z", "ZZ"));




//  Q:13 There is a special keyboard with all keys in a single row.
// You have given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i – j|.

// You want to type a string word. Write a program to calculate how much time it takes to type it with one finger.



// initiliaze map to store the index of each character of keyboard
// loop thorugh characters in the keyboard 
// 	add each character with index in map

// initilize time to store the time it takes to type the word
// initilize the varoable to store the current position of finger in keyboards
// loop thorugh characters in the word
// 	get the current character in teh keyboards from map the which have already asigned values
// 	calculate time math absolute function a
// 	the  store in time variable
// 	update current positin with current character

// return time



// const keyboardTime = (keyboard, word) => {

//     var keyboardMap = new Map();

//     for (let i = 0; i <keyboard.length; i++) {
//         keyboardMap.set(keyboard[i], i);

//     }

//     var time = 0;
//     var currentPosition = 0;

//  for (let i = 0; i <word.length; i++) {
//        let charIndex  = keyboardMap.get(word[i]);

//        time += Math.abs(charIndex - currentPosition);

//        currentPosition = charIndex;


//     }

//     return time;
// }

// console.log(keyboardTime("pqrstuvwxyzabcdefghijklmno", "hello"));




//  Q:14 write a easy to understand code in javascript which 	
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.


// inintilize  variable to store interpreation
// loop thorugh each character in the command 
// 	check if current character ==G
//  	add G in interpreation
// 	else if
// 		check if current character ( and next two characyers are al
// 		add al in interpreation
// 		i+=2
// 	elseif
// 		check if current character ( and next character is )
// 		add o in interpreation
// 		i+=1

// return interpreation




// const interpretationGoal = (input) => {

//     var interpretation = "";
//     for (var i = 0; i < input.length; i++){
//         if (input[i] === "G"){
//             interpretation +="G";
//         }
//         else if (input[i] === "(" && input[i+1] === "a" && input[i+2] === "l"){
//             interpretation +="al";
//             i+=2;
//         }
//         else if (input[i] === "(" && input[i+1] === ")"){
//             interpretation +="o";
//             i+=1;
//         } 
//     }
    



//     return interpretation;
// }

// console.log(interpretationGoal("G()()()()(al)"));


//  Q:15 You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.


// inilizize empty new array as same as provded input string length
// loop thorugh each character in input string
// 	Place the current character in the shuffled array at the index specified by the corresponding element in the indices array
// join shuflled array in one string
// return that string




// const ShuffleString = (input, indices) => {

// var shuflledArray = Array(input.length).fill("");

// for (var i = 0; i < input.length; i++) {
//     shuflledArray[indices[i]]=input[i];
// }

//     return shuflledArray.join("");
// }

// console.log(ShuffleString("abc",[0,1,2]));



//  Q:16 Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.

// initialize count variable to store the number of counts
// initialize balance to store the balance

// loop thrrough the string
// 	check if current character is L decrement by 1
// 	else  if current character is R encrement by 1
// 	If blanace ===0 means already balanced
// 	count ++
// return count



// const BalancedStrings = (input) => {

// var count = 0;
// var balance = 0;

// for (var i = 0; i < input.length; i++) {
//     if(input[i]=== "L"){
//         balance--;
//     }
//     else{
//         balance++;
//     }
//     if(balance===0){
//         count++;
//     }

// }

//     return count;
// }

// console.log(BalancedStrings("RLRRLLRLRL"));





//  Q:17 You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.


// Create a substitution table with map
// loop through keys
// 	if keys hasve spaces then skip
// 	if key is not in substitution table then add all alphabets 
// docode table using substitution table
// initialiez decodemessage
// loop on message
// 	if char is empty 
// 		then add empty in decodemessage
// 	else 
// 		add element from subsitiuation table to decode message 

// return decode message 

// the main logic in this code is that 
// all abc alphabets are stores as keys and values are letter of keys


// const decodeMessage = (key, message) => {

//     var substitutionTable = {};
//     for (let i = 0; i < key.length; i++){

//         if (key[i] === ' ') continue;
//         if(!substitutionTable[key[i]]){
//             substitutionTable[key[i]] =String.fromCharCode(97 + Object.keys(substitutionTable).length);
//         }
//     }

//     let decode = "";
//     for (const char of message) {
//         if (char === ' '){
//             decode +=' ';
//         }
//         else{
//             decode +=substitutionTable[char]
//         }

//     }

//     return decode;
// }

// Define a function to decode the message
// function decodeMessage(key, message) {
//     // Create a substitution table by mapping the letters in key to the letters of the English alphabet
//     const substitutionTable = {};
//     for (let i = 0; i < key.length; i++) {
//       // Skip the spaces in key
//       if (key[i] === ' ') continue;
//       // If the letter hasn't been mapped yet, map it to the corresponding letter of the English alphabet
//       if (!substitutionTable[key[i]]) {
//         substitutionTable[key[i]] = String.fromCharCode(97 + Object.keys(substitutionTable).length);
//       }
//     }
  
//     // Decode the message using the substitution table
//     let decodedMessage = "";
//     for (const char of message) {
//       if (char === ' ') {
//         decodedMessage += ' ';
//       } else {
//         decodedMessage += substitutionTable[char];
//       }
//     }
  
//     return decodedMessage;
//   }
  

// console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb"));



//  Q:18 A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.



// split senetence into words
// create empty array indices to store the original indeices of words
// loop through words
// 	exract index of word and store it in index variable
// 	push it into indices
// 	remove the index from word
// sorting with indices and words
// declare sortewords array
// loop thorugh indices
// 	sort
// join array of words into senetence then store into senetense

// return senetense


// const SortingSentence = (input) => {

// let words = input.split(" ");
// let indices = [];

// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let index = parseInt(word.slice(-1));
//     indices.push(index - 1);
//     words[i] = word.slice(0, -1);
// }

// let sortedWords =[];
// for(let i = 0; i < indices.length; i++) {
//     sortedWords[indices[i]]=words[i];
// }

// let senetence = sortedWords.join(" ");

//     return senetence;
// }

// console.log(SortingSentence("Myself2 Me1 I4 and3"));



//  Q:19 A pangram is a sentence where every letter of the English alphabet appears at least once.

// create a variable letters to filter unique letters from input string
// loop through 
// 	save a ll unique letters to set

// initilize alphabet variable with complete abc
// loop thorugh
// 	check if unique letters contain all alhapbets
// 	return true 
// 	else 
// 	false 


// const Pangram = (input) => {

// let letters = new Set();
// for (let i = 0; i < input.length; i++){
//     letters.add(input[i]);
// }

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// for (let i = 0; i < alphabet.length; i++){
//     if (!letters.has(alphabet[i])){
//         return false;
//     }
// }

//     return true;
// }

// console.log(Pangram("leetcode"));




//  Q:20 A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.


// function truncateSentence(s, k) {
//     // Split the sentence into words by spaces
//     let words = s.split(" ");
  
//     // Check if the number of words is less than or equal to k
//     if (words.length <= k) {
//         return s;
//     }
  
//     // Truncate the words array to only the first k words
//     words = words.slice(0, k);
  
//     // Join the truncated words array into a sentence string
//     let truncated = words.join(" ");
  
//     return truncated;
// }


// console.log(truncateSentence("Hello how are you Contestant", "4"));




//  Q:21 International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:


// initilize a map with key and values morse values
// convert string to lowercase
// split string to individual characters
// declare any array with name morse to store the morse code
// loop thorugh charaters
// 	check if that character is available in mosrecode map 
// 	then push push that character in morse

// join morse code in string with spaces



// const MorseCode = (str) => {

//     const morseCode = {
//         'a': '.-',
//         'b': '-...',
//         'c': '-.-.',
//         'd': '-..',
//         'e': '.',
//         'f': '..-.',
//         'g': '--.',
//         'h': '....',
//         'i': '..',
//         'j': '.---',
//         'k': '-.-',
//         'l': '.-..',
//         'm': '--',
//         'n': '-.',
//         'o': '---',
//         'p': '.--.',
//         'q': '--.-',
//         'r': '.-.',
//         's': '...',
//         't': '-',
//         'u': '..-',
//         'v': '...-',
//         'w': '.--',
//         'x': '-..-',
//         'y': '-.--',
//         'z': '--..'
//     };

//     // Convert the string to lowercase
//     str = str.toLowerCase();
  
//     // Split the string into individual characters
//     let chars = str.split("");
  
//     // Create an array to store the morse code for each character
//     let morse = [];
  
//     // Iterate through each character in the string
//     for (let char of chars) {
//         // If the character is a letter of the alphabet, get its morse code from the morseCode object
//         if (morseCode[char]) {
//             morse.push(morseCode[char]);
//         }
//     }
  
//     // Join the morse code into a string separated by spaces
//     return morse.join(" ");
// }

// console.log(MorseCode("HELLO WORLD"));



// Q: 22 A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.


// function nestingDepth(s) {
//     // initialize a variable to keep track of the nesting depth
//     let depth = 0;
//     // initialize a variable to keep track of the maximum nesting depth
//     let maxDepth = 0;
//     // loop through each character in the string
//     for (let i = 0; i < s.length; i++) {
//         // if the character is an opening parenthesis, increment the depth
//         if (s[i] === '(') {
//             depth++;
//             // update the max depth if necessary
//             maxDepth = Math.max(depth, maxDepth);
//         } 
//         // if the character is a closing parenthesis, decrement the depth
//         else if (s[i] === ')') {
//             depth--;
//         }
//     }
//     // return the max depth
//     return maxDepth;
// }


// console.log(nestingDepth("(1+(2*3)+((8)/4))+1"));


// Q: 23 A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

// Return the number of '*' in s, excluding the '*' between each pair of '|'.

// Note that each '|' will belong to exactly one pair.



// var countStars = function(s) {
//     // Initialize a variable to store the count of stars
//     let count = 0;
    
//     // Iterate over each character in the string
//     for (let i = 0; i < s.length; i++) {
//       // If the current character is a star, increment the count
//       if (s[i] === '*') {
//         count++;
//       }
//       // If the current character is a vertical bar, skip the next character
//       else if (s[i] === '|') {
//         i++;
//       }
//     }
    
//     // Return the final count of stars
//     return count;
//   };





// Q: 24 Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// This code takes a string as input and replaces all the uppercase letters with the same lowercase letter

// function toLowerCase(s) {
//     // Initialize an empty string result
//     let result = "";
    
//     // Iterate over each character in the input string
//     for (let i = 0; i < s.length; i++) {
//       // Check if the current character is an uppercase letter
//       if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
//         // If it is, add the corresponding lowercase letter to the result string
//         result += String.fromCharCode(s.charCodeAt(i) + 32);
//       } else {
//         // If it's not, just add the character as it is to the result string
//         result += s[i];
//       }
//     }
    
//     // Return the final result
//     return result;
//   }


// Q: 25 You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.


// function consistentStrings(allowed, words) {
//     // create a set from the allowed string to have O(1) lookup time
//     let allowedSet = new Set(allowed.split(''));
//     let count = 0;
  
//     // loop through each word in the words array
//     for (let word of words) {
//       let isConsistent = true;
  
//       // loop through each character in the word
//       for (let char of word) {
//         // check if the character is not in the allowed set
//         if (!allowedSet.has(char)) {
//           isConsistent = false;
//           break; // exit the inner loop if the character is not allowed
//         }
//       }
  
//       // if all the characters in the word are allowed, increment count
//       if (isConsistent) {
//         count++;
//       }
//     }
  
//     return count;
//   }



// Q: 26 Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.



// function countMatchingSubstrings(patterns, word) {
//     let count = 0; // initialize a counter variable to keep track of the number of matching substrings
//     for (let pattern of patterns) { // loop through each pattern string in the patterns array
//       if (word.includes(pattern)) { // check if the word includes the current pattern string as a substring
//         count++; // increment the counter variable if a matching substring is found
//       }
//     }
//     return count; // return the total count of matching substrings
//   }
  
  
// Q: 27 You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.


// function mapString(s) {
//     const charCodeOffset = 'a'.charCodeAt(0) - 1; // set the offset to convert numbers to characters
//     let result = ''; // initialize an empty string to store the mapped string
//     let i = 0; // initialize a pointer to keep track of the current position in the string
  
//     while (i < s.length) { // loop through each character in the string
//       let code = s[i]; // get the current character
  
//       if (s[i + 2] === '#') { // check if the next two characters form a valid code (i.e., '10#' to '26#')
//         code = s.substring(i, i + 3); // get the three characters that form the code
//         i += 3; // increment the pointer by 3
//       } else { // otherwise, assume the current character is a valid code
//         i++; // increment the pointer by 1
//       }
  
//       const charCode = parseInt(code) + charCodeOffset; // convert the code to a character code
//       result += String.fromCharCode(charCode); // append the corresponding character to the result string
//     }
  
//     return result; // return the mapped string
//   }
  

// Q: 28 Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// function findFirstPalindromicString(words) {
//     for (let word of words) { // loop through each word in the array
//       if (isPalindromic(word)) { // check if the word is palindromic
//         return word; // return the word if it is palindromic
//       }
//     }
//     return ''; // return an empty string if no palindromic word is found
//   }
  
//   function isPalindromic(word) {
//     let i = 0; // initialize a pointer to the beginning of the word
//     let j = word.length - 1; // initialize a pointer to the end of the word
  
//     while (i < j) { // loop until the two pointers meet in the middle of the word
//       if (word[i] !== word[j]) { // check if the characters at the two pointers are different
//         return false; // return false if the word is not palindromic
//       }
//       i++; // move the first pointer to the right
//       j--; // move the second pointer to the left
//     }
  
//     return true; // return true if the word is palindromic
//   }
  


// Q: 29 Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.



// function reverseStringUntilFirstOccurrence(word, ch) {
//     const index = word.indexOf(ch); // get the index of the first occurrence of the character
  
//     if (index === -1) { // if the character is not found, do nothing and return the original string
//       return word;
//     }
  
//     const prefix = word.substring(0, index + 1); // get the substring that starts at index 0 and ends at the index of the first occurrence of the character (inclusive)
//     const suffix = word.substring(index + 1); // get the substring that starts at the index of the first occurrence of the character (exclusive)
  
//     return reverseString(prefix) + suffix; // reverse the prefix and concatenate it with the suffix to get the resulting string
//   }
  
//   function reverseString(str) {
//     return str.split('').reverse().join(''); // split the string into an array of characters, reverse the array, and join the characters back into a string
//   }


// Q: 30 You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.


// function halvesAreAlike(s) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // an array of all vowels
//     const n = s.length; // get the length of the string
//     const mid = n / 2; // find the index of the middle character of the string
  
//     let count = 0; // initialize a counter for the number of vowels
  
//     for (let i = 0; i < n; i++) { // loop through each character of the string
//       if (vowels.includes(s[i])) { // if the character is a vowel
//         count += i < mid ? 1 : -1; // increment or decrement the count based on which half of the string the character belongs to
//       }
//     }
  
//     return count === 0; // the halves are alike if the count of vowels is 0
//   }
  

// Q: 31 There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

// The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
// The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

// Return the number of rods that have all three colors of rings on them.


// function getNumRodsWithAllColors(rings) {
//     const n = rings.length / 2; // get the number of rings
//     const rods = {}; // create an empty object to store the rods and their colors
  
//     for (let i = 0; i < n; i++) { // loop through each ring
//       const color = rings[2 * i]; // get the color of the ring
//       const rod = rings[2 * i + 1]; // get the rod that the ring is placed on
  
//       if (!rods[rod]) { // if the rod is not in the object yet
//         rods[rod] = { R: false, G: false, B: false }; // create a new entry for the rod with all colors set to false
//       }
  
//       rods[rod][color] = true; // set the color of the ring on the rod to true
//     }
  
//     let count = 0; // initialize a counter for the number of rods with all three colors
  
//     for (const rod in rods) { // loop through each rod in the object
//       if (rods[rod].R && rods[rod].G && rods[rod].B) { // if the rod has all three colors
//         count++; // increment the count
//       }
//     }
  
//     return count; // return the number of rods with all three colors
//   }
  
  

// Q: 32 You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.


// function sortByHeight(names, heights) {
//     const sortedHeights = [...heights].sort((a, b) => b - a); // create a new array of heights sorted in descending order
//     const result = []; // create an empty array to store the sorted names
  
//     for (const height of sortedHeights) { // loop through each height in the sorted array
//       const index = heights.indexOf(height); // get the index of the height in the original array
//       result.push(names[index]); // add the corresponding name to the result array
//       names.splice(index, 1); // remove the name from the original array to avoid duplicates
//       heights.splice(index, 1); // remove the height from the original array as well
//     }
  
//     return result; // return the sorted array of names
//   }
  

// Q: 33  A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.


// function removeOuterParentheses(s) {
//     let result = ""; // create an empty string to store the result
//     let count = 0; // initialize a counter for the number of open parentheses
  
//     for (let i = 0; i < s.length; i++) { // loop through each character in the input string
//       if (s[i] === "(") { // if the current character is an open parenthesis
//         count++; // increment the counter
//         if (count > 1) { // if this is not the outermost open parenthesis
//           result += s[i]; // add it to the result
//         }
//       } else { // if the current character is a close parenthesis
//         count--; // decrement the counter
//         if (count > 0) { // if this is not the outermost close parenthesis
//           result += s[i]; // add it to the result
//         }
//       }
//     }
  
//     return result; // return the final result string
//   }



// Q: 34 You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.


// function replaceDigits(s) {
//     const shift = (c, x) => String.fromCharCode(c.charCodeAt(0) + x); // function to shift character by x positions
  
//     let result = ''; // initialize the result string
  
//     for (let i = 0; i < s.length; i++) {
//       if (i % 2 === 0) {
//         result += s[i]; // if current index is even, add the character to the result string
//       } else {
//         const shiftedChar = shift(s[i - 1], parseInt(s[i])); // shift the character based on the previous character
//         result += shiftedChar; // add the shifted character to the result string
//       }
//     }
  
//     return result; // return the final result string
//   }



// Q: 35 write a easy to understand code in javascript which

// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

// and also comment on each line


// function numOfStrings(patterns, word) {
//     let count = 0;
//     for (let i = 0; i < patterns.length; i++) {
//       if (word.includes(patterns[i])) {
//         count++;
//       }
//     }
//     return count;
//   }

  

// Q: 36 You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.


// function squareIsWhite(coordinates) {
//     // Get the first character of the coordinates (letter)
//     const letter = coordinates[0];
//     // Get the second character of the coordinates (number)
//     const number = coordinates[1];
    
//     // Check if the sum of the ASCII codes of the letter and number is odd
//     if ((letter.charCodeAt(0) + number.charCodeAt(0)) % 2 !== 0) {
//       return true; // If odd, the square is white
//     } else {
//       return false; // If even, the square is black
//     }
//   }


// Q: 37 Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  



// function generateStringWithOddOccurrences(n) {
//     let result = '';
  
//     // Generate a string of alternating characters until it reaches the required length
//     for (let i = 0; i < n; i++) {
//       if (i % 2 === 0) {
//         result += 'a';
//       } else {
//         result += 'b';
//       }
//     }
  
//     return result;
//   }



// Q: 38 You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city. 


// function destCity(paths) {
//     const destinations = new Set(); // create an empty set to store all the destination cities
//     const origins = new Set(); // create an empty set to store all the origin cities
  
//     for (let path of paths) { // loop through each path
//       origins.add(path[0]); // add the origin city to the set of origins
//       destinations.add(path[1]); // add the destination city to the set of destinations
//     }
  
//     for (let destination of destinations) { // loop through each destination
//       if (!origins.has(destination)) { // check if the destination is not an origin city
//         return destination; // return the destination city
//       }
//     }
//   }
  
  

// Q: 39 You are given a string s. Reorder the string using the following algorithm:
// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.


// function sortString(s) {
//     // Create an array of length 26 to keep track of the count of each character in the string
//     const charCounts = new Array(26).fill(0);
//     // Get the length of the input string
//     const n = s.length;
//     // Loop through each character in the input string and update the count in the charCounts array
//     for (let i = 0; i < n; i++) {
//       charCounts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     }
//     // Initialize an empty string to hold the sorted characters
//     let result = '';
//     // Keep looping until the length of the result string matches the length of the input string
//     while (result.length < n) {
//       // Loop through each character in the charCounts array from smallest to largest
//       for (let i = 0; i < 26; i++) {
//         // If the count for the current character is greater than 0, append it to the result string and decrement its count
//         if (charCounts[i] > 0) {
//           result += String.fromCharCode(i + 'a'.charCodeAt(0));
//           charCounts[i]--;
//         }
//       }
//       // Loop through each character in the charCounts array from largest to smallest
//       for (let i = 25; i >= 0; i--) {
//         // If the count for the current character is greater than 0, append it to the result string and decrement its count
//         if (charCounts[i] > 0) {
//           result += String.fromCharCode(i + 'a'.charCodeAt(0));
//           charCounts[i]--;
//         }
//       }
//     }
//     // Return the sorted result string
//     return result;
//   }
  

// Q: 40 You are given an array of strings words and a string pref
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.


// function countPrefix(words, pref) {
//     let count = 0;
//     for (let i = 0; i < words.length; i++) { // loop through each word in the array
//       if (words[i].startsWith(pref)) { // check if the word starts with the prefix
//         count++; // increment the count if it does
//       }
//     }
//     return count; // return the count of words containing the prefix
//   }
   





// *********************|
// *********************|
// ARRAY PROBLEMS      |
// *********************|
// **********************


//  Q: 01 Roman numeral to a number.
// console.log("Prblem:01 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.");
// function twoSum(input, target) {
//     for (let i = 0; i < (input.length)-1; i++) {
//       for (let j = (i+1); j < input.length; j++) {
//         if (input[i] + input[j] == target) {
//           console.log("["+input[i]+" , " + input[j] + "]");
//           return true;
//         //   break;
//         }
//       }
//     }
//     console.log("not matched");
//     return false;

//   }
//   var arr = [1,0,2,1,11,11];
//   twoSum(arr,11);




//  Q: 02 Roman numeral to a number.
// console.log("Prblem:05 Write a function to find the longest common prefix string amongst an array of strings If there is no common prefix, return an empty string .");
// let input =  ["dog","racecar","car"]
// let prefix = input[0].slice(0,2);
// let allPassed = input.every(function(element){
//   if(element.includes(prefix))
//   {
//     return "true";
//   }
//   else
//   {
//     return ""
//   }
// });

// console.log(allPassed);



//  Q: 03 Roman numeral to a number.
// console.log("Prblem:06 Valid Parentheses .");
// function display(parentheses,inputParam) {
//     first = inputParam.split('');
//     for (let i = 0; i < parentheses.length; i++) {

//         if(inputParam.length >= 2 && parentheses.includes(first[i]))
//         {
//             getIndex = parentheses.indexOf(first[i]);
//             if(first[i+1] == parentheses[getIndex+1] )
//             {
//                 // console.log(first[i]+first[i+1]);
//             console.log("valid");
//                 return true;
//             }
//             console.log("not valid");
//             return false;
//         }
//         console.log("wrong input");
//             return false;

//     }

//     // console.log(inputParam.length);
//     // get input
//     // split in single element
//     // find index of first input from array
//     // then compare with  2nd element
//     // if match return true otehriwse false


//         // console.log(parentheses.indexOf(inputParam));

//     // parentheses.forEach(element => {

//     //     console.log(element);
//     // });


//   }
//   var parentheses = ['(', ')', '{', '}', '[',']'];
//   var input = '{}(}';
//   display(parentheses,input);


//  Q: 04 Roman numeral to a number.
// console.log("Prblem:07 Merge Two Sorted Lists");
// function display(inputParam1,inputParam2) {
// var newList = [];
// var totalLength = inputParam1.length + inputParam2.length;
// // primes = totalLength.concat(inputParam2);
// // console.log(totalLength);
// for (var i = 0; i < totalLength.length; i++)
// {
//     // loop one list
//     // add second list

//         newList[i] = inputParam1[i];
//         newList[i+1] = inputParam2[i];
//     console.log(newList[i])
//     i=i+2;
// }

// // for (var i = 0; i < newList.length; i++)
// // {

// //     console.log(newList[i])
// // }

//   }
//   var list1 = [1,2,3,4,5,6,7,8,9,10];
//   var list2 = [2,2,2,11];
//   display(list1,list2);



//  Q: 05 A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

//  You are given an array of strings sentences, where each sentences[i] represents a single sentence.
 
//  Return the maximum number of words that appear in a single sentence.


//  // This code returns the maximum number of words that appear in a single sentence
// function maxWordsInSentence(sentences) {
//     // Initialize a variable to store the maximum number of words in a sentence
//     let maxWords = 0;
  
//     // Loop through each sentence in the array
//     for (let sentence of sentences) {
//       // Split the sentence into words using the single space as a separator
//       let words = sentence.split(" ");
//       // Check if the number of words in the current sentence is greater than the current maxWords
//       if (words.length > maxWords) {
//         // If it is, update the value of maxWords
//         maxWords = words.length;
//       }
//     }
    
//     // Return the maximum number of words
//     return maxWords;
//   }


// Q: 06 Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).


// function buildArray(nums) {
//     // create an empty array to store the result
//     let ans = [];
  
//     // loop through the nums array
//     for (let i = 0; i < nums.length; i++) {
//       // for each index i, get the corresponding value in the nums array
//       // and store it at the same index in the ans array
//       ans[i] = nums[nums[i]];
//     }
  
//     // return the final ans array
//     return ans;
//   }


// Q: 07 Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.


// // Define a function to return the concatenation of two nums arrays
// function doubleArray(nums) {
//     // Initialize an empty array "ans"
//     let ans = [];

//     // Loop through the nums array
//     for (let i = 0; i < nums.length; i++) {
//         // Push the current element of nums to the ans array
//         ans.push(nums[i]);
//         // Push the current element of nums to the ans array again
//         ans.push(nums[i]);
//     }
//     // Return the ans array
//     return ans;
// }



// Q: 08 Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].


// function shuffleArray(nums) {
//     let result = []; // Declare the result array to store the rearranged elements
//     for (let i = 0; i < nums.length / 2; i++) { // Loop through the first half of the nums array
//         result.push(nums[i]); // Push the current element from the first half to the result array
//         result.push(nums[i + nums.length / 2]); // Push the corresponding element from the second half to the result array
//     }
//     return result; // Return the result array
// }


// Q: 09 There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.


// function finalValue(operations) {
//     let x = 0; // initialize the variable x with value 0
  
//     // loop through the operations array
//     for (let i = 0; i < operations.length; i++) {
//       switch (operations[i]) { // use switch statement to check the operation
//         case "++X": // if the operation is ++X
//         case "X++":
//           x++; // increment the value of x by 1
//           break;
//         case "--X": // if the operation is --X
//         case "X--":
//           x--; // decrement the value of x by 1
//           break;
//       }
//     }
  
//     return x; // return the final value of x
//   }
  


// Q: 10 Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.


// function goodPairs(nums) {
//     // initialize a count variable to keep track of good pairs
//     let count = 0;
//     // loop through the nums array to compare each pair
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         // if a pair is good, increment the count
//         if (nums[i] === nums[j]) {
//           count++;
//         }
//       }
//     }
//     // return the final count of good pairs
//     return count;
//   }
  
//   console.log(goodPairs([1,2,3,1,1,3]));



// Q: 11 Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// // This function calculates the running sum of an array of integers
// function runningSum(nums) {
//     // Initialize an empty array to store the running sum
//     let runningSum = [];
  
//     // Initialize a variable to keep track of the current sum
//     let currentSum = 0;
  
//     // Loop through the input array
//     for (let i = 0; i < nums.length; i++) {
//       // Add the current element to the current sum
//       currentSum += nums[i];
  
//       // Append the current sum to the running sum array
//       runningSum.push(currentSum);
//     }
  
//     // Return the running sum array
//     return runningSum;
//   }

// Q: 12 You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// const maximumWealth = (accounts) => {
//     let maxWealth = 0; // Initialize a variable to store the maximum wealth
  
//     // Loop through the accounts array
//     for (let i = 0; i < accounts.length; i++) {
//       // Get the sum of the current customer's wealth
//       let currentWealth = accounts[i].reduce((sum, current) => sum + current, 0);
//       // Update the maximum wealth if the current customer's wealth is higher
//       maxWealth = Math.max(maxWealth, currentWealth);
//     }
  
//     // Return the maximum wealth
//     return maxWealth;
//   };


// Q: 13 There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// function kidsWithCandies(candies, extraCandies) {
//     // Find the maximum number of candies among all kids
//     let maxCandies = Math.max(...candies);
    
//     // Create an array to store the result
//     let result = [];
    
//     // Loop through each kid
//     for (let i = 0; i < candies.length; i++) {
//       // Check if the kid will have the greatest number of candies after receiving extraCandies
//       if (candies[i] + extraCandies >= maxCandies) {
//         result.push(true);
//       } else {
//         result.push(false);
//       }
//     }
    
//     // Return the result
//     return result;
//   }

// Q: 14 You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.


// // define the function that takes in an array of positive integers "nums"
// function elementAndDigitDifference(nums) {
//     // initialize the variable "elementSum" to keep track of the sum of all elements in "nums"
//     let elementSum = 0;
//     // initialize the variable "digitSum" to keep track of the sum of all digits in "nums"
//     let digitSum = 0;
//     // use for loop to iterate through each element in the "nums" array
//     for (let i = 0; i < nums.length; i++) {
//       // add the current element to the "elementSum"
//       elementSum += nums[i];
//       // convert the current element to string and split it into individual characters
//       let digits = nums[i].toString().split("");
//       // use another for loop to iterate through each character in "digits"
//       for (let j = 0; j < digits.length; j++) {
//         // convert the current character to integer and add it to "digitSum"
//         digitSum += parseInt(digits[j]);
//       }
//     }
//     // return the absolute difference between "elementSum" and "digitSum"
//     return Math.abs(elementSum - digitSum);
//   }
  

// Q: 15 Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// function smallerNumbersThanCurrent(nums) {
//     let result = [];  // array to store the count of numbers smaller than the current number
//     for (let i = 0; i < nums.length; i++) { // loop through the nums array
//       let count = 0;  // count to keep track of numbers smaller than the current number
//       for (let j = 0; j < nums.length; j++) {  // inner loop to compare the current number with other numbers in the array
//         if (nums[j] < nums[i]) {  // if the current number is smaller than the number being compared
//           count++;  // increment the count
//         }
//       }
//       result.push(count);  // add the count to the result array
//     }
//     return result;  // return the result array
//   }


// Q: 16 We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.


// // Define a function called "decompressRLElist"
// function decompressRLElist(nums) {
//     let result = []; // Create an empty array called "result" to store the decompressed list
//     for (let i = 0; i < nums.length; i += 2) { // Loop through the "nums" array with a step of 2
//       let freq = nums[i]; // Get the frequency from the current index
//       let val = nums[i + 1]; // Get the value from the next index
//       for (let j = 0; j < freq; j++) { // Loop through "freq" number of times
//         result.push(val); // Add "val" to the end of the "result" array
//       }
//     }
//     return result; // Return the decompressed list stored in the "result" array
//   }
  

// Q:17 Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// function createTargetArray(nums, index) {
//     // Initialize an empty array to store the target array
//     let target = [];
    
//     // Loop through each element of nums
//     for (let i = 0; i < nums.length; i++) {
//       // Insert the element nums[i] at the index index[i] in target array
//       target.splice(index[i], 0, nums[i]);
//     }
    
//     // Return the target array
//     return target;
//   }


// Q: 18 You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.


// function countItems(items, ruleKey, ruleValue) {
//     // initialize count variable to keep track of matching items
//     let count = 0;
    
//     // loop through each item in the items array
//     for (let i = 0; i < items.length; i++) {
//       // check if the item matches the given rule
//       if (items[i][0] === ruleKey && items[i][1] === ruleValue) {
//         // if yes, increment the count
//         count++;
//       } else if (items[i][0] === ruleKey && items[i][2] === ruleValue) {
//         // if yes, increment the count
//         count++;
//       } else if (items[i][1] === ruleKey && items[i][2] === ruleValue) {
//         // if yes, increment the count
//         count++;
//       }
//     }
    
//     // return the count of matching items
//     return count;
//   }


// Q: 19 Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

// function sumOddLengthSubarrays(arr) {
//     let sum = 0;
    
//     // Loop through each subarray length
//     for (let len = 1; len <= arr.length; len += 2) {
//       // Loop through each starting index of subarray
//       for (let start = 0; start < arr.length; start++) {
//         // Calculate ending index of subarray
//         let end = start + len - 1;
//         // If ending index is greater than the length of arr, break the loop
//         if (end >= arr.length) break;
//         // Loop through each element of subarray and add it to the sum
//         for (let i = start; i <= end; i++) {
//           sum += arr[i];
//         }
//       }
//     }
    
//     return sum;
//   }


// Q: 20 You are given an n x n integer matrix grid.

// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

// maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

// Return the generated matrix.

// // Define a function to find the maxLocal matrix
// function largestValuesInGrid(grid) {
//     // Create a variable to store the maxLocal matrix
//     let maxLocal = [];
  
//     // Loop through the rows of the grid
//     for (let i = 1; i < grid.length - 1; i++) {
//         // Create a new array to store the values for each row
//         let row = [];
  
//         // Loop through the columns of the grid
//         for (let j = 1; j < grid[i].length - 1; j++) {
//             // Find the largest value in the 3 x 3 matrix
//             let max = Math.max(grid[i - 1][j - 1], grid[i - 1][j], grid[i - 1][j + 1], grid[i][j - 1], grid[i][j], grid[i][j + 1], grid[i + 1][j - 1], grid[i + 1][j], grid[i + 1][j + 1]);
  
//             // Add the largest value to the row
//             row.push(max);
//         }
  
//         // Add the row to the maxLocal matrix
//         maxLocal.push(row);
//     }
  
//     // Return the maxLocal matrix
//     return maxLocal;
// }



  
  
// Q: 21 Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string

// function arraysEqual(word1, word2) {
//     //check if the length of the two arrays are equal, return false if not equal
//     if (word1.length !== word2.length) {
//       return false;
//     }
//     //loop through each element in the first array
//     for (let i = 0; i < word1.length; i++) {
//       //check if the elements at the same position in both arrays are equal, return false if not equal
//       if (word1[i] !== word2[i]) {
//         return false;
//       }
//     }
//     //if all elements are equal, return true
//     return true;
//   }


// Q: 22 Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.


// function findPairsWithGivenDifference(nums, k) {
//     let count = 0; 
//     let map = new Map(); // Create a map to store the number of occurrences of each number in the array
  
//     for (let i = 0; i < nums.length; i++) {
//       map.set(nums[i], (map.get(nums[i]) || 0) + 1); // Store the number of occurrences of each number in the array in the map
//     }
  
//     for (let i = 0; i < nums.length; i++) {
//       let target = nums[i] + k; // Calculate the target value by adding k to the current number
//       if (map.has(target)) { // Check if the target value exists in the map
//         count++; 
//         map.set(target, map.get(target) - 1); // Decrement the count of the target value in the map
//         if (map.get(target) === 0) { // If the count of the target value becomes 0, remove it from the map
//           map.delete(target);
//         }
//       }
//     }
  
//     return count; 
//   }
  


// uploaded   
// Q: 23 You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.


// function consistentStrings(allowed, words) {
//     // Create a Set from the allowed string to make it easier to check for characters in it
//     let allowedSet = new Set(allowed);
//     let count = 0;
    
//     // Loop through the words array
//     for (let word of words) {
//       let isConsistent = true;
      
//       // Loop through the word to check if all its characters are in allowedSet
//       for (let char of word) {
//         if (!allowedSet.has(char)) {
//           isConsistent = false;
//           break;
//         }
//       }
      
//       // If all characters are in allowedSet, increment the count
//       if (isConsistent) {
//         count++;
//       }
//     }
    
//     // Return the final count
//     return count;
//   }
  


// uploaded   
// Q: 24 There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

// You may perform the following move any number of times:

// Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

// Note that there may be multiple seats or students in the same position at the beginning.

// function minMoves(seats, students) {
//     // Sort the seats and students arrays in ascending order
//     seats.sort((a, b) => a - b);
//     students.sort((a, b) => a - b);
  
//     let result = 0;
//     // Loop through the students array
//     for (let i = 0; i < students.length; i++) {
//       // Find the closest seat for the current student
//       let seatIndex = binarySearch(seats, students[i]);
//       // Calculate the number of moves required for the current student
//       result += Math.abs(seats[seatIndex] - students[i]);
//     }
  
//     return result;
//   }
  
//   function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;
  
//     while (left < right) {
//       let mid = Math.floor((left + right) / 2);
//       if (array[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid;
//       }
//     }
  
//     return left;
//   }



// uploaded   

// Q: 25 You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.


// function maximumDeleteSum(grid) {
//     let rows = grid.length, cols = grid[0].length;
//     let max = [];
//     for (let i = 0; i < rows; i++) {
//       max[i] = Math.max(...grid[i]);
//     }
//     max.sort((a, b) => b - a);
//     let sum = 0;
//     for (let i = 0; i < cols; i++) {
//       sum += max[i];
//     }
//     return sum;
//   }





// function countVowels(input) {
    
//     // const countVowels = new Map();
//     const  vowelCount = {};
//     // var count =0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < input.length; i++) {
//         const char = input[i];
//         if (vowels.includes(char)) {
//             if (vowelCount[char]) {
//                 vowelCount[char]++;
//               } else {
//                 vowelCount[char] = 1;
//               }
//         }
//     }

//     return vowelCount;
//   }

//   console.log(countVowels("anabcod"));



// uploaded   
// Q: 26 Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.


// https://leetcode.com/problems/count-good-triplets/

// function countGoodTriplets(arr, a, b, c) {
//     let count = 0; // initialize count to 0
//     const n = arr.length; // get length of array
//     for (let i = 0; i < n; i++) { // loop over array and consider each element as arr[i]
//       for (let j = i + 1; j < n; j++) { // loop over array starting from i + 1 and consider each element as arr[j]
//         if (Math.abs(arr[i] - arr[j]) > a) { // if the absolute difference between arr[i] and arr[j] is greater than a, move to next iteration
//           continue;
//         }
//         for (let k = j + 1; k < n; k++) { // loop over array starting from j + 1 and consider each element as arr[k]
//           if (Math.abs(arr[j] - arr[k]) > b) { // if the absolute difference between arr[j] and arr[k] is greater than b, move to next iteration
//             continue;
//           }
//           if (Math.abs(arr[i] - arr[k]) > c) { // if the absolute difference between arr[i] and arr[k] is greater than c, move to next iteration
//             continue;
//           }
//           count++; // if all conditions are satisfied, increment count by 1
//         }
//       }
//     }
//     return count; // return the final count of good triplets
//   }


// uploaded   
// Q: 27 Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

// function numOfPairs(nums, k) {
//     const n = nums.length;
//     const counts = new Map();
//     let result = 0;
  
//     // Count the frequency of each element in nums.
//     for (let i = 0; i < n; i++) {
//       if (counts.has(nums[i])) {
//         counts.set(nums[i], counts.get(nums[i]) + 1);
//       } else {
//         counts.set(nums[i], 1);
//       }
//     }
  
//     // Iterate over each element in counts and check if it has a pair
//     // that satisfies the conditions.
//     for (const [num, count] of counts) {
//       const complement = (k - num % k) % k;
//       if (counts.has(complement)) {
//         const complementCount = counts.get(complement);
//         result += count * complementCount;
//       }
//     }
  
//     // If k is even, we need to check pairs of elements that have the same value
//     // and are located at i and j such that i % k = j % k = k / 2.
//     if (k % 2 === 0) {
//       const half = k / 2;
//       if (counts.has(half)) {
//         const halfCount = counts.get(half);
//         result += (halfCount * (halfCount - 1)) / 2;
//       }
//     }
  
//     return result;
//   }

  

// uploaded 
// Q: 28 Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

// function maxProduct(nums) {
//     let max1 = 0; // variable to store the maximum number in the array
//     let max2 = 0; // variable to store the second maximum number in the array
  
//     // loop through the array to find the two maximum numbers
//     for (let num of nums) {
//       if (num >= max1) {
//         // if the current number is greater than or equal to the maximum number
//         max2 = max1; // update the second maximum number
//         max1 = num; // update the maximum number
//       } else if (num >= max2) {
//         // if the current number is greater than or equal to the second maximum number
//         max2 = num; // update the second maximum number
//       }
//     }
  
//     // calculate the product of the two maximum numbers minus 1 and return it
//     return (max1 - 1) * (max2 - 1);
//   }
  


// uploaded 
// Q: 29 You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.


// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

// function countGoodRectangles(rectangles) {
//     let maxLen = 0; // initialize the maximum length to 0
//     let count = 0; // initialize the count to 0
    
//     // loop through each rectangle in the array
//     for (let i = 0; i < rectangles.length; i++) {
//       let [l, w] = rectangles[i]; // get the length and width of the current rectangle
//       let len = Math.min(l, w); // find the length of the largest square that can be cut from the rectangle
      
//       // if the length of the current square is greater than or equal to the current maximum length
//       if (len >= maxLen) {
//         // if the length is equal to the maximum length, increment the count
//         if (len === maxLen) count++;
//         // if the length is greater than the maximum length, update the maximum length and reset the count
//         else {
//           maxLen = len;
//           count = 1;
//         }
//       }
//     }
    
//     return count; // return the count of rectangles that can make a square with a side length of maxLen
//   }
  
  
// uploadded  
// Q: 30 Given an integer n, return any array containing n unique integers such that they add up to 0.

// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

// function sumZero(n) {
//     const result = []; // initialize an empty array to store the result
//     let sum = 0; // initialize a variable to keep track of the sum of the elements
    
//     // loop through n-1 elements and add them to the result array
//     for (let i = 0; i < n - 1; i++) {
//       result.push(i); // add the current index to the result array
//       sum += i; // add the current index to the sum
//     }
    
//     // add the opposite of the sum to the result array to make the sum of all elements 0
//     result.push(-sum);
    
//     return result; // return the result array
//   }

  




  


  
  
  


  

  


























