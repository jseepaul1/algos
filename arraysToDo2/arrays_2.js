// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length,
// with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second

// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var tempVal = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tempVal;
  }

  return array;
}

// console.log(reverseArrayInPlace([32,11,6,19,4,78]))
// console.log(reverseArrayInPlace([-2,17,12,8,-4,28]))
// console.log(reverseArrayInPlace([]))

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements,
// followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concatArray(firstArray, secondArray) {
  for (i = 0; i < secondArray.length; i++) {
    firstArray.push(secondArray[i]);
  }
  return firstArray;
}
console.log(concatArray(["a", "b"], [1, 2]));
console.log(concatArray(["cd", "gf"], [1, 2,23,19]));
