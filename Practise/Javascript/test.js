// *********************|
// *********************|
// String Probelms      |
// *********************|
// **********************

// //  Q: 01 Given an integer x, return true if x is a palindrome, and false otherwise.
// craete a varivale to store a reverse String
// reverse the String
// compare reverse and original string


// function display(inputParam) {
// var store = "";
// for(var i = inputParam.length-1; i >= 0; i--) {
// store += inputParam[i];
// // console.log(i);
// }

// return store == inputParam;
// }

// console.log(display("123"));


//  Q: 02 Given an integer x, return true if x is a palindrome, and false otherwise ( Aply on number).
// convert number to string
// craete a varivale to store a reverse String
// reverse the String
// compare reverse and original string


// function display(inputParam) {
// var toString = ""+inputParam;
// var store = "";
// for(var i = toString.length-1; i >= 0; i--) {
// store += toString[i];
// // console.log(i);
// }

// return store == toString;
// }

// console.log(display("111"));


//  Q: 03 reverse a string.

// function display(inputParam) {

//     var store = "";
// for(var i = inputParam.length-1; i>=0; i--){
// store += inputParam[i];

// }

// return store;
// }

// console.log(display("123"));


//  Q: 04 reverse a number.
// function display(inputParam) {
//     var toString = ""+inputParam;
//     var store = "";
// for(var i = toString.length-1; i>=0; i--){
// store += toString[i];

// }

// return store;
// }

// console.log(display(1234567890));


// Q: 05 check if it perfect square .



// function display(inputParam) {

// var result  = 0;

// while(result * result <= inputParam){
//     result++;
// }

// return (result-1) * (result-1) == inputParam;
// }

// console.log(display(10));


// Q: 06 You can solve this problem by first splitting the input string into a list of color strings. Then, you can create a dictionary where the keys are the positions and the values are the corresponding color names. Iterate through the list of color strings and extract the position from each string, using it as the key to store the color name in the dictionary. Finally, iterate through the dictionary in order of the keys and concatenate the color names to build the final string. 

// split words in Array
// create empty objetc which will store the key and values 
// extract key from every words
// extract value from words
// assign value and key to object
// return values of object


// function display(inputParam) {

// var toArray = inputParam.split(" ");
// var colorDit = {};

// for (var i = 0; i < toArray.length; i++){
//     const colorKey = parseInt(toArray[i].slice(toArray[i].lastIndexOf(' ')));
//     const coloValue = toArray[i].slice(0, -1);
//     colorDit[colorKey] = coloValue;
// }

// // const sortedColors = Object.values(colorDit);

// return Object.values(colorDit);


// }

// console.log(display("amjad2 kousar3 irfan1"));


// Q:07 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// craete empty array to store the all incoming brackets
// create a object with key as a opejing bracket and closig bracket as avalue
// traverse loop on String 
//     check if incoming character ( bracket) is "(" or  "{} " or "[" 
//         then push it in stack 

//         else remove last bracket from stack and check if last remove bracket found in object rhen return false


// else return true 

// function display(inputParam) {

//     var stack = [];
//     var TotalBrackets = {
//         "(":")",
//         "{":"}",
//         "[":"]",
//     }

//     for (var i = 0; i < inputParam.length; i++)
// {
//     if(inputParam[i] === "(" || inputParam[i] === "{" || inputParam[i] === "["){
//         stack.push(inputParam[i]);
//     }
//     else
//     {
//         lastBracket = stack.pop();
//         if(inputParam[i] != TotalBrackets[lastBracket])
//         {
//             return false
//         }
//     }
// }

// return true;

// }

// console.log(display("()()}"));