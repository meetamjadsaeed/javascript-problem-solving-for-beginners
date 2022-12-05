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


console.log("Prblem:06 Valid Parentheses .");
function display(parentheses,inputParam) {
    first = inputParam.split('');
    // for (let i = 0; i < parentheses.length; i++) {
        
    // }

    // console.log(inputParam.length);
    // get input
    // split in single element
    // find index of first input from array
    // then compare with  2nd element
    // if match return true otehriwse false
    if(inputParam.length >= 2 && parentheses.includes(first[0]))
    {
        getIndex = parentheses.indexOf(first[0]);
        if(first[1] == parentheses[getIndex+1] )
        {
            console.log(first[0]+first[1]);
            return true;
        }
        console.log("not valid");
        return false;
    }
    console.log("wrong input");
        return false;
    
        // console.log(parentheses.indexOf(inputParam));
    
    // parentheses.forEach(element => {
        
    //     console.log(element);
    // });


  }
  var parentheses = ['(', ')', '{', '}', '[',']'];
  var input = '{}{';
  display(parentheses,input);





