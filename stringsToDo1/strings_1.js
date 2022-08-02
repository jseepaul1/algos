// Strings To Do 1

// Write functions using the JavaScript language for all challenges.
// Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// 1. Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks.

function removeBlanks(string, i = 0, str = "") {
  if (i >= string.length) return str;
  else if (string[i] == " ") return removeBlanks(string, i + 1, str);
  else return removeBlanks(string, i + 1, (str += string[i]));
}

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c"));
// console.log(removeBlanks("I can not BELIEVE it's not butter"));

// 2.Get Digits

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

function getDigits(string) {
  return (result = string.replace(/\D/g, ""));
}
// console.log(getDigits("abc8c0d1ngd0j0!8"))
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// 3. Acronyms

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

function acronym(string) {
  return string
    .match(/\b(\w)/g)
    .join("")
    .toUpperCase();
}
// console.log(acronym(" there's no free lunch - gotta pay yer way. "))
// console.log(acronym("Live from New York, it's Saturday Night!"))

// 4. Count Non-Spaces

// Create a function that, given a string, returns the number of non-space characters found in the string.

function countNonSpaces(string) {
  let temp = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      temp++;
    }
  }
  return temp;
}
// console.log(countNonSpaces("Honey pie, you are driving me crazy"))
// console.log(countNonSpaces("Hello world !"))

// 5. Remove Shorter Strings

// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

function removeShorterStrings(array, num) {
  for (let j = array.length - 1; j >= 0; j--) {
    if (array[j].length < num) {
      for (let i = j; i < array.length - 1; i++) {
        let tempVal = array[i];
        array[i] = array[i + 1];
        array[i] = tempVal;
      }
      array.pop();
    }
  }
  return array;
}
// console.log(
//   removeShorterStrings(
//     ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
//     4
//   )
// );
// console.log(
//   removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3)
// );
