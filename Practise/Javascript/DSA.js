// ***********************
//ARRAY WITH BRUTE FORCE |
// ***********************

// Q1: Write a program to reverse an array or string


// declare empty array
// loop input array reverse
// save element from loop to empty array 
// return new array.
// console.time("myCode"); // 'myCode' is the namespace

// const output = (input) => {

//     let reverseArray = [];
//     let index = 0;
//     for (let i = input.length - 1; i >= 0; i--) {
//         reverseArray[index] = input[i];
//         index++;
//     }

//     return reverseArray;


// }

// console.log(output([1, 2, 3,5,6,7,8,93]));
// console.timeEnd("myCode");



// Q2: task is to find the Kth smallest element in the given array

// find the lenth of array 
//           check if kth number is greater than length of number then return false
// sort the array in ascending order 
// find the number from array with that index 


// console.time("myCode"); // 'myCode' is the namespace
// const output = (array, k) => {

//     if (k > array.length) {
//         return "out of index";
//     }

//     const sortedArray = array.sort((a, b) => a - b);

//     return sortedArray[k - 1];


// }

// console.log(output([1, 4, 5, 5, 2, 7, 3, 93,4,5,76,2,3,5,6,2,1,5,7,89,6,4,2,1,34,67,89,0,0,9,7,65,4,32,2,12,34,5,6,6,], 9));
// console.timeEnd("myCode");


// Q3: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Algorthm 



// console.time("myCode"); // 'myCode' is the namespace
// const output = (array, k) => {


//     for (let index = 0; index < array.length; index++) {

//         for(let i = 0; i < array.length; i++) {

//             if (array[index] + array[i] === k) {

//                 return `[ ${array[index]} , ${array[i]} ]`;
//             }

//         }


//     }
//     return "sum not found";


// }

// console.log(output([1, 3, 5, 5, 10, 7, 3, 93], 100));
// console.timeEnd("myCode");



// Q4: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// console.time("myCode"); // 'myCode' is the namespace
// const threeSum = (array) => {

//     const found = [];

//     for (let index = 0; index < array.length; index++) {
//         if (array[index] + array[index + 1] + array[index + 2]=== 0) {

//             found.push(`[ ${array[index]}, ${array[index + 1]}, ${array[index + 2]} ],`)
//             // return `[ ${array[index]} , ${array[index + 1]} ]`;
//         }


//     }
//     return found;


// }

// console.log(threeSum([4, -4, 0, 5, 2, 7, -7, 0]));
// console.timeEnd("myCode");








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


// Q2: task is to find the Kth smallest element in the given array


// The current implementation sorts the entire array and returns the k-th smallest element ( withour DSA). Sorting the entire array can be time-consuming, especially when k is much smaller than the length of the array.

// To optimize this code, we can use the QuickSelect algorithm, which is similar to QuickSort. The basic idea of QuickSelect is to select a pivot element and partition the array into two parts, one with elements smaller than the pivot and the other with elements greater than the pivot. We then recursively select the k-th smallest element in the smaller partition or the (k-m)-th smallest element in the greater partition, where m is the number of elements in the smaller partition.

// Here is the optimized code using the QuickSelect algorithm:


// console.time("myCode"); // 'myCode' is the namespace
// const partition = (array, left, right, pivotIndex) => {
//     const pivotValue = array[pivotIndex];
//     let tmp = array[pivotIndex];
//     array[pivotIndex] = array[right];
//     array[right] = tmp;
//     let storeIndex = left;
//     for (let i = left; i < right; i++) {
//         if (array[i] < pivotValue) {
//             tmp = array[i];
//             array[i] = array[storeIndex];
//             array[storeIndex] = tmp;
//             storeIndex++;
//         }
//     }
//     tmp = array[storeIndex];
//     array[storeIndex] = array[right];
//     array[right] = tmp;
//     return storeIndex;
// };

// const quickSelect = (array, left, right, k) => {
//     if (left === right) {
//         return array[left];
//     }
//     let pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
//     pivotIndex = partition(array, left, right, pivotIndex);
//     if (k === pivotIndex) {
//         return array[k];
//     } else if (k < pivotIndex) {
//         return quickSelect(array, left, pivotIndex - 1, k);
//     } else {
//         return quickSelect(array, pivotIndex + 1, right, k);
//     }
// };

// const output = (array, k) => {
//     if (k > array.length) {
//         return "out of index";
//     }
//     return quickSelect(array, 0, array.length - 1, k - 1);
// };

// console.log(output([1, 4, 5, 5, 2, 7, 3, 93], 3));
// console.timeEnd("myCode");

// In the above implementation, the partition function takes an array, left and right indices, and a pivot index, and partitions the array around the pivot index. The quickSelect function takes an array, left and right indices, and a value k, and recursively finds the k-th smallest element in the array. The output function takes an array and a value k and returns the k-th smallest element in the array using the quickSelect function.

// The time complexity of the optimized code is O(n), where n is the length of the array. This is because, in the worst case, we need to partition the array n times. However, on average, the algorithm partitions the array log(n) times, making it much faster than sorting the entire array.

// but my previous code was taking 4.22 ms and your code is taking 4.5 ms


// The performance of an algorithm can depend on various factors, such as the size of the input, the distribution of the input values, the implementation details, and the hardware on which the code is running. Therefore, it's possible that in some cases, the previous code may perform better than the optimized code, especially if the input size is small or if the input values are already partially sorted.

// That being said, it's worth noting that measuring the performance of code can be a complex task, and it's important to take multiple measurements and consider various factors to get an accurate picture of the performance. In addition, it's also important to optimize code based on its complexity and scalability, rather than just its speed on a particular input.

// In the case of finding the k-th smallest element in an array, the QuickSelect algorithm has a lower time complexity than sorting the entire array, especially when k is much smaller than the length of the array. Therefore, the optimized code using QuickSelect should perform better in most cases, especially for larger input sizes and random or unsorted input values.

// If you are still concerned about the performance of the optimized code, you can try to further optimize the implementation by using a median-of-medians pivot selection algorithm, which guarantees a worst-case linear time complexity. However, this implementation can be more complex and may not provide a significant performance improvement for small input sizes or partially sorted input values.

// what is main difference between Quick Select and Quicksort Algorithm  




// Q3: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Algorthm 



// console.time("myCode"); // 'myCode' is the namespace
// const twoSum = (nums, target) => {
//     const numMap = new Map(); // create a new map data structure to store the numbers in the input array
  
//     for (let i = 0; i < nums.length; i++) { // loop through each element in the input array
//       const complement = target - nums[i]; // calculate the complement value of the current number
  
//       if (numMap.has(complement)) { // check if the complement value exists in the map
//         return [numMap.get(complement), i]; // return the indices of the complement and the current number
//       }
  
//       numMap.set(nums[i], i); // add the current number and its index to the map
//     }
  
//     return null; // return null if there is no valid two-sum pair
//   };  

// console.log(output([1, 4, 5, 5, 2, 7, 3, 93], 100));
// console.timeEnd("myCode");


// The given code performs a two-sum operation on an input array to find if there exists any two elements in the array that sum up to a given target value k.

// Here's a possible solution that uses a hash map data structure to improve the time complexity of the algorithm:



// The approach used here is to store the indices of each element in a hash map data structure, and then loop through the input array to check if the complement value of each element (i.e., target - nums[i]) exists in the map. If it does, we have found a valid two-sum pair, and we can return the indices of the two numbers as an array. If there is no valid two-sum pair, we return null. This algorithm has a time complexity of O(n) because we only need to loop through the input array once, and the hash map lookups are constant time.




// Q4: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// console.time("myCode"); // 'myCode' is the namespace
// const threeSum = (array) => {
//     const found = [];

//     // Sort the array in non-descending order
//     array.sort((a, b) => a - b);

//     // Iterate over all possible pairs of elements in the array
//     for (let i = 0; i < array.length - 2; i++) {
//         // Use a HashSet to store the complement of the current element
//         let complementSet = new Set();

//         // Iterate over all elements after the current element
//         for (let j = i + 1; j < array.length; j++) {
//             let complement = -array[i] - array[j];

//             // Check if the complement of the current pair is in the HashSet
//             if (complementSet.has(complement)) {
//                 found.push(`[ ${array[i]}, ${array[j]}, ${complement} ],`);
//             }

//             // Add the current element to the HashSet
//             complementSet.add(array[j]);
//         }
//     }

//     return found;
// }


// console.log(threeSum([4, -4, 0, 5, 2, 7, -7, 0]));
// console.timeEnd("myCode");


// In this implementation, we first sort the input array in non-descending order using the sort method. This allows us to identify duplicates and makes it easier to find pairs of elements that add up to a particular value. We then iterate over all possible pairs of elements in the array and use a HashSet to store the complement of the current pair. We check if the complement of the current pair is in the HashSet, and if so, we add the triplet of elements to the found array. Finally, we return the found array.

// Here are comments on each line of code in the optimized implementation:
