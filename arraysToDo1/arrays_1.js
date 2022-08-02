// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Inputs and outputs
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(array, value) {
  // loop through the array backwards
  for (let i = array.length; i > 0; i--) {
    let currentVal = array[i - 1];
    // array[i] is each value in the array
    array[i] = currentVal;
  }
  array[0] = value;
  return array;
}
// console.log(pushFront([5,7,2,3], 8))
// console.log(pushFront([99], 7))

// 2. Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it.
//  You may use .pop(), you are able do this without it though!

// Inputs and outputs
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(array) {
  let val = array[array.length - 1];
  array[array.length - 1] = array[0];
  array[0] = val;
  console.log(array.pop());
  return array;
}

// console.log(popFront([0, 5, 10, 15]));
// console.log(popFront([4, 5, 7, 9]));

// 3. Insert At
// Given an array, index, and additional value, insert the value into array at given index.
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Inputs and outputs
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(array, index, value) {
  array[array.length] = value
  for (let i = array.length-1; i > index; i--) {
    let tempVal = array[i];
    array[i] = array[i - 1];
    array[i - 1] = tempVal;
  }
  return array;
}

// console.log(insertAt([100, 200, 5], 2, 311));
// console.log(insertAt([9, 33, 7], 1, 42));


// 4. BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index.
// Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Inputs and outputs
// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

function removeAt(array, index) {
    for(let i = array.length - 1; i > index; i--) {
        let tempVal = array[i];
        array[i] = array[i-1]
        array[i-1]= tempVal;
    }
    return array.pop()

}
// console.log(removeAt([1000,3,204,77], 1))
// console.log(removeAt([8,20,55,44,98], 3))