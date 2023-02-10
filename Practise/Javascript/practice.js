// *********************|
// *********************|
// String Probelms      |
// *********************|
// **********************

//  Q: 01 Roman numeral to a number.
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



//  Q: 03 Roman numeral to a number.
// console.log("Prblem:04 Return a Reverse Number");
// function display(inputParam) {
//   for (let index = inputParam.length; index >= 0; index--) {
//     // const element = array[index];
//     console.log(inputParam.charAt(index));
// // console.log("Return a Reverse Number");

//   }

//   }
//   var input = "aaabbbcccdddeee";
//   display(input);



//  Q: 04 Roman numeral to a number.
// console.log("Prblem:04 Sqrt(x)");
// function display(inputParam) {

// // first check if number is even divide by even numbers otehrwise odd 

// // then multiply every even number and compare output with input 
// // if match then return otherwsie false
// // 


// var check = inputParam%2;

// if(check == 0)
// {
//     for(var i=0; i<inputParam; i++)
//     {
//         if(i%2 == 0)
//         {
//             if(i*i == inputParam)
//             {
//                 console.log("Yes It is perfect root"+ i);
//                 return true;   
//             }
//         }

//         if(i%2 == 1)
//         {
//             if(i*i == inputParam)
//             {
//                 console.log("Yes It is perfect root"+ i);
//                 return true;   
//             }
//         }


//     }

// console.log(check);

// }

// // for (var i = 0; i <



//   }
//   var input = 9;
//   display(input);


//Q:05 You can solve this problem by first splitting the input string into a list of color strings. Then, you can create a dictionary where the keys are the positions and the values are the corresponding color names. Iterate through the list of color strings and extract the position from each string, using it as the key to store the color name in the dictionary. Finally, iterate through the dictionary in order of the keys and concatenate the color names to build the final string. 

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
//get last word
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

// const convertToRoman = (input) => {

// var roman = "";
// var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
// var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

// for (var i = 0; i <numbers.length; i++) {
//     while(input>=numbers[i]){
//         roman+=romanNumeral[i];
//         input-=numbers[i];
//     }
// }

//     return roman;
// }

// console.log(convertToRoman("52"));




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




const Pangram = (input) => {

let letters = new Set();
for (let i = 0; i < input.length; i++){
    letters.add(input[i]);
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < alphabet.length; i++){
    if (!letters.has(alphabet[i])){
        return false;
    }
}

    return true;
}

console.log(Pangram("leetcode"));







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



//  Q:13 A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

//  You are given an array of strings sentences, where each sentences[i] represents a single sentence.
 
//  Return the maximum number of words that appear in a single sentence.





// const maximumWords = (input) => {



//     return input;
// }

// console.log(maximumWords("255.100.50.0"));





















