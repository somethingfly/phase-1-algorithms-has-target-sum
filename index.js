function hasTargetSum(array, target) {
  // Write your algorithm here
  const object = {};
  for (const element of array) {
    if (object[target - element] == 1) {
      return true
    }
    object[element] = 1;    
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  
  linear
  exponentional if we have to go through all the numbers once in the array, and then again to compare
  i suspect we can get around it, though, by using an object to hold values
  then it would be linear

*/

/* 
  Add your pseudocode here

  create object
  go through array
  if in object at a key of the target minus value there is a 1 (means there's a match), then return true
  e.g. if current value is 3, and target is 10, then a match would be 7, check key of "7" in object, if there's a 1, then return true
  if not put at the key of the value a 1
  e.g. put a 1 as the value in the object for the key "3"

*/

/*
  Add written explanation of your solution here

  uses O(n) of iterating through the array, and then an O(1) to access another array for match, thus linear
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 2], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 2], 8));
}

module.exports = hasTargetSum;
