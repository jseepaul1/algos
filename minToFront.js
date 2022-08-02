// Min to Front

// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it.
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr) {
  let minIndex = 0;
  let minElement = arr[minIndex];

  for (let i = 0; i < arr.length; i++) {
    // change minIndex and minElement if smaller than current element
    if (minElement > arr[i]) {
      minIndex = i;
      minElement = arr[minIndex];
    }
  }
  for (let i2 = minIndex; i2 > 0; i2--) {
    //   here we are working from the minIndex backwards
    // shift everything left to the right
    arr[i2] - arr[i2 - 1];
  }

  //   put smallest element in arr[0]
  arr[0] = minElement;

  return arr;
}
// minToFront([5, 32, 12, 6, 18, 3]);
// minToFront([4,2,1,3,5]);
// minToFront([]);
