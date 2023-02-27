// ***********************
//ARRAY WITH BRUTE FORCE |
// ***********************

// Q1: Write a program to reverse an array or string


// declare empty array
// loop input array reverse
// save element from loop to empty array 
// return new array.
console.time("myCode"); // 'myCode' is the namespace

const output = (input) => {

    let reverseArray = [];
    let index = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        reverseArray[index] = input[i];
        index++;
    }

    return reverseArray;


}

console.log(output([1, 2, 3,5,6,7,8,93]));
console.timeEnd("myCode");







// ***********************
//ARRAY WITH DSA |
// ***********************


// Q1: Write a program to reverse an array or string

// A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. In other words, the last element added to the stack is the first one to be removed. We can use a stack to reverse the order of elements in an array as follows:

// Create an empty stack.
// Iterate through the input array and push each element onto the stack.
// Create a new array and pop each element from the stack and add it to the new array.
// This way, we can reverse the order of elements in the array without having to iterate through it twice, as in the original code. Here's the optimized code:



// const output = (input) => {
//     const stack = [];
//     for (let i = 0; i < input.length; i++) {
//       stack.push(input[i]);
//     }
//     const reverseArray = [];
//     while (stack.length > 0) {
//       reverseArray.push(stack.pop());
//     }
//     return reverseArray;
//   }
  
//   console.log(output([1, 2, 3, 5, 6, 7, 8, 93]));

