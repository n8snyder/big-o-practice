"use strict";
// Part 1
// 1. O(n + 10)
// O(n)
// 2. O(100 × n)
// O(n)
// 3. O(25)
// O(1)
// 4. O(n**2 + n**3)
// O(n**3)
// 5. O(n + n + n + n)
// O(4 x n) = O(n)
// 6. O(1000 × log(n) + n)
// O(n)
// 7. O(1000 × n × log(n) + n)
// O(n x log(n))
// 8. O(2**n + n**2)
// O(2**n)
// 9. O(5 + 3 + 1)
// O(1)
// 10. O(n + n**(1/2) + n**2 + n × log(n)**10)
// O(n x log(n)**10)

// Part 2

/*Step Two: Calculating Time Complexity»
Determine the time complexities for each of the following functions. 
If you’re not sure what these functions do, copy and paste them into the console
and experiment with different inputs!
*/

function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

//Time Complexity: O(n)

function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
//Time Complexity: O(n)

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
//Time Complexity: O(1)

function onlyNumsAtEvenIndexes(nums) {
  let numsAtEvens = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      numsAtEvens.push(nums[i]);
    }
  }

  return numsAtEvens;
}
//Time Complexity: O(nums)

function runningSubtotals(nums) {
  let subtotals = [];

  for (let i = 0; i < nums.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += nums[j];
    }
    subtotals.push(subtotal);
  }

  return subtotals;
}
//Time Complexity: O(nums^2)

const VOWELS = "aeiouAEIOU";

function vowelsCounts(word) {
  let vowelsToCounts = {};

  for (let char of word) {
    if (VOWELS.includes(char)) {
      if (char in vowelsToCounts) {
        vowelsToCounts[char] += 1;
      } else {
        vowelsToCounts[char] = 1;
      }
    }
  }

  return vowelsToCounts;
}

//Time Complexity: O(word)

// Part 3
/*
Step Three: Short answer»
Answer the following questions

True or false: n2 + n is O(n2).

True or false: n2 * n is O(n^3).

True or false: n2 + n is O(n).

What’s the time complexity of the .indexOf array method?

What’s the time complexity of the .includes array method?

What’s the time complexity of the .every array method?

What’s the time complexity of the .sort array method?

What’s the time complexity of the .unshift array method?

What’s the time complexity of the .push array method?

What’s the time complexity of the .pop array method?

What’s the time complexity of the Object.keys() function?

Bonus:

What’s the space complexity of the Object.keys() function?
*/
