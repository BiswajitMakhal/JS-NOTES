//1️⃣PRINT LESSER OR EQUAL THAN 4

// Ai method-a akta array-ar moddhe print hobe
let a = [20, 15, 5, 2, 3, 1, 4];
let b = [];

for (i = 0; i < a.length; i++) {
  if (a[i] <= 4) {
    b.push(a[i]);
  }
}
console.log(b);

// Ai method-a por por loop hoe print hobe
let sec = [15, 6, 3, 1, 4, 2, 8];
for (let i = 0; i < sec.length; i++) {
  //prothome i = 0 mane index diye suru holo, then i- ar index gulo jotokhon array-length theke choto thakbe loop cholte thakbe
  if (sec[i] <= 4) {
    console.log(sec[i]);
  }
}

//2️⃣ CHECK THE LEAP YEAR OR NOT:

let year = 2020;
if (year % 4 === 0 && year % 100 !== 0) {
  console.log(`${year}:leap year`);
} else if (year % 100 !== 0 && year % 400 === 0) {
  console.log(`${year}:leap year`);
} else {
  console.log(`${year}:not leap year`);
}

// 3️⃣ Sum from 1 to 10, loop korte hobe

let sum = 0;
for (i = 1; i <= 10; i++) {
  //(i = 1; i < 11; i++) arokomo lekha jeto//
  sum += i;
}
console.log(sum);

// 4️⃣ Write a function that takes a string as input and returns the reverse of the string?

function reverse() {
  let abcd = "abcd";
  let rev = "";
  for (i = 0; i < abcd.length; i++) {
    rev = abcd[i] + rev; //jehutu abcd-ar index no. ta aage likhechi(abcd[i]+rev) tai prottek bare index ta loop hoe aage bosbe //
  }
  console.log(rev);
}
reverse();

// 5️⃣ Write a JavaScript program to remove specified elements from the right of a given array of elements.?

function remove() {
  let a = [1, 2, 3, 4, 5, 6];
  let b = [];
  for (i = 0; i < a.length; i++) {
    a.pop();
    b.push(a[i]); //a[0] = 1  [1,2,3,4,5],  a[1] = 2 [1,2,3,4], a[2] = 3 [1,2,3], a[3]= undefined(4 already remove hoe gache)
  }
  console.log(b);
}
remove();

// 6️⃣ Write a JavaScript function that reverses a number?

function numberRev() {
  let num = [3, 2, 2, 4, 3];
  let numRev = [];
  for (i = 0; i < num.length; i++) {
    numRev = num[i] + numRev;
  }
  console.log(numRev);
}
numberRev();

// 7️⃣ Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function alpha() {
  let name = "biswajit";
  let order = name.split(""); //letter wise split kore array banai
  order.sort(); //sort holo akta ARRAY METHOD jetar dara amra array ke alphabetical order sajate pari
  order = order.join(""); //join holo akta ARRAY METHOD, jetar dara akta array-ar sob elements ke string-ar moddhe jora deoa jai
  console.log(order);
}
alpha();

// 8️⃣ Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within
// the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function vowel(str) {
  // let str = "the quick brow fox";
  let vowels = "aeiou";
  let count = "";
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(vowel("the quick brown fox"));

// 9️⃣ Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and
// undefined.

function checktype(value) {
  return typeof value;
}
console.log(checktype(123));
console.log(checktype(""));
console.log(checktype());
console.log(checktype(true));
console.log(checktype(function () {}));
console.log(checktype({ name: "biswajit" }));

// 🔟 Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is
// odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} even`);
  } else {
    console.log(`${i} odd`);
  }
}

// 1️⃣1️⃣ Write a JavaScript conditional statement to find the largest of five numbers.
function largestNum(a, b, c, d, e) {
  if (a > b && a > c && a > d && a > e) {
    console.log(`${a} is a largest number`);
  } else if (b > a && b > c && b > d && b > e) {
    console.log(`${b} is a largest number`);
  } else if (c > a && c > b && c > d && c > e) {
    console.log(`${c} is a largest number`);
  } else if (d > a && d > b && d > c && d > e) {
    console.log(`${d} is a largest number`);
  } else {
    console.log(`${e} is a largest number`);
  }
}
largestNum(10, 15, 20, 25, 30);

// 1️⃣2️⃣ Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function numSort() {
  let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
  arr1.sort(function (a, b) {
    return a - b; //accending order
  });
  console.log(arr1);
}

numSort();

// ----------REDUCE
// QUESTION----> let array =[1, 2, 2, 2, 3, 4, 5, 6, 7, 8]
// 1: 1,  2: 3,  3: 1,  4: 1,  5: 1,  6: 1,  7: 1,  8: 1 (OUTPUT WITH REDUCE).

let x = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8];

// type:1
let hello = (acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1; //ai line tai acc[curr] mane hoche accumulator-ar moddhe currenvalue key-er count store korar akta jaiga, (acc[curr]||0) mane hoche accumulator-ar moddhe jodi currvalue thake tahole seta bosbe nahole 0 bosbe, tarpore +1 hobe, bracket-ar pore +1 lekha jate oitar kaaj aage na hoi jeta bracket-a lekha seta aage hoi.//
  return acc;
};
let y = x.reduce(hello, {});
console.log(y); //output = current vlaue : count

// type:2
let xx = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8];

let yy = xx.reduce(function (acc, curr) {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(yy);

// ===============================================================================================================================================================================================================================================================================================================================================================================//
// PRACTICE QUESTIONS:
// DAY 2: Variables, var/let/const, Scope, Hoisting, TDZ
// 1. Write a program to demonstrate how var, let, and const behave differently when declared inside a loop.
// 2. Create a program that shows the difference between function scope of var and block scope of let.
// 3. Write a program to prove that re-declaring a variable with var works, but not with let or const.
// 4. Demonstrate a case where a const object can have its properties changed, even though reassignment is
// not allowed.
// 5. Write a program showing how hoisting works differently for var vs let.
// 6. Create a program where accessing a let variable before declaration throws a TDZ (Temporal Dead Zone)
// error.
// 7. Demonstrate shadowing by declaring a variable inside a block that has the same name as an outer
// variable (with var and let).
// 8. Write a program showing the effect of hoisting in function declarations vs function expressions.
// ---------------------
// DAY 3: Operators
// 1. Write a program to check if a number is odd or even without using the modulus operator (%).
// 2. Use the ternary operator to classify a student’s grade based on their score.
// 3. Demonstrate the difference between == and === by comparing variables of different data types.
// 4. Write a program that swaps two numbers without using a third variable, only using arithmetic operators.
// 5. Use logical operators to check if a year is a leap year or not.
// 6. Demonstrate the use of the nullish coalescing operator (??) with multiple fallback values.
// 7. Write a program that uses bitwise operators to check if a given number is a power of 2.
// 8. Write a program that calculates the area of a rectangle only if both length and breadth are greater than
// 0, using short-circuit evaluation (&&).
// ------------------
// DAY 4: Conditional & Loop Statements
// 1. Write a program that finds the largest of three numbers using only if-else (no Math.max).
// 2. Use switch to build a simple calculator that can perform addition, subtraction, multiplication, and division.
// 3. Write a program to print all even numbers between 1 and 50 using a for loop.
// 4. Write a program to print the multiplication table of a given number using a while loop.
// 5. Use a do-while loop to repeatedly ask the user for input until they type "exit".
// 6. Write a program that iterates through an array of numbers and prints only the odd numbers using a
// for...of loop.
// 7. Write a program to iterate through an object and print all key-value pairs using for...in.
// 8. Write a program that calculates the sum of digits of a number using a loop (e.g., 123 → 1+2+3 = 6).
// ----------------------
// DAY 5: Functions
// 1. Write a named function that checks whether a string is a palindrome or not.
// 2. Create an arrow function that returns the factorial of a given number.
// 3. Write an anonymous function that sorts an array of numbers in ascending order.
// 4. Create a higher-order function that takes another function as input and executes it 3 times.
// 5. Write a program where a function returns another function that adds a specific number to its argument
// (closure).
// 6. Demonstrate first-class functions by storing multiple functions in an array and calling them one by one.
// 7. Write a function that takes two numbers and a callback function, and applies the callback to those
// numbers (e.g., addition, subtraction).
// 8. Create a program where you use a default parameter to calculate compound interest (default interest
// rate if not provided).
// -----------------------------------
// DAY 6: Strings & String Methods
// 1. Write a program to check whether a given string is a palindrome using built-in string methods.
// 2. Create a program that counts the number of vowels and consonants in a string.
// 3. Write a program that reverses a string without using loops (only string methods).
// 4. Use slice() and substring() to extract the middle 3 characters of a given string.
// 5. Write a program that replaces all spaces in a sentence with -.
// 6. Write a program that capitalizes the first letter of every word in a sentence.
// 7. Write a program to check if one string is a substring of another using includes().
// 8. Write a program to count how many times a specific word occurs in a paragraph using split()
// ------------------------------------
// DAY 7: Strings & String Methods (Continued)
// 1. Write a program to sort the characters of a string alphabetically.
// 2. Write a program that removes all duplicate characters from a string.
// 3. Create a program that checks whether two strings are anagrams of each other.
// 4. Write a program to mask the last 4 digits of a phone number (e.g., 9876543210 → ******3210).
// 5. Write a program that finds the longest word in a sentence.
// 6. Write a program that trims leading and trailing spaces from a string and counts the actual length.
// 7. Write a program to convert a string into title case (every word starts with uppercase).
// 8. Write a program that checks if a given string starts and ends with the same character.
// ------------------------------------
// DAY 8: Arrays & Array Methods
// 1. Write a program that finds the largest and smallest elements in an array.
// 2. Write a program that removes all duplicate elements from an array.
// 3. Create a program to reverse an array without using reverse() method.
// 4. Write a program to find the sum and average of all numbers in an array.
// 5. Write a program to find the index of the first occurrence of a given element in an array.
// 6. Write a program that joins all elements of an array into a single string separated by commas.
// 7. Write a program to merge two arrays and remove duplicates.
// 8. Write a program to find all even numbers from an array using filter().
//  -------------------------------------
// DAY 9: Arrays & Array Methods (Continued)
// 1. Write a program that sorts an array of numbers in ascending and descending order.
// 2. Write a program to count how many times each element appears in an array.
// 3. Write a program to flatten a nested array (e.g., [1, [2, [3]]] → [1,2,3]).
// 4. Write a program to rotate an array by k positions to the right.
// 5. Write a program that finds the intersection of two arrays.
// 6. Write a program to split an array into chunks of size n.
// 7. Write a program that squares each element of an array using map().
// 8. Write a program to check if all elements in an array are unique.
//  --------------------------------------
// DAY 10: Concept of Array-Objects
// 1. Write a program to create an array of objects representing students with name and marks, and print only
// the names of students who scored more than 50.
// 2. Write a program that sorts an array of objects by a specific property (e.g., age).
// 3. Write a program to find the student with the highest marks from an array of student objects.
// 4. Write a program to group an array of objects by a property (e.g., group employees by department).
// 5. Write a program that finds the average marks of all students in an array of objects.
// 6. Write a program that filters out employees earning less than a certain salary from an array of employee
// objects.
// 7. Write a program that updates the age of a person in an array of objects, given their name.
// 8. Write a program that checks if all products in an array of objects are in stock (inStock = true).
//  -------------------------------------------
// DAY 11: Date and Number Methods
// 1. Write a program to display the current date in dd-mm-yyyy format.
// 2. Write a program that calculates the number of days left until New Year.
// 3. Write a program to find the difference in days between two given dates.
// 4. Write a program that extracts the current hour and prints whether it’s AM or PM.
// 5. Write a program that generates a random number between 1 and 100 using number methods.
// 6. Write a program that rounds a decimal number to 2 places using toFixed().
// 7. Write a program to check if a given number is an integer using a built-in method.
// 8. Write a program to convert a string "123.45" into a number and round it down using Math.floor().
//  --------------------------------
// DAY 12: Object, this, Call, Apply & Bind
// 1. Write a program to create an object car with properties and a method that prints this.brand.
// 2. Write a program to demonstrate how this behaves differently in a normal function vs an arrow function.
// 3. Create an object person with a method greet(), then borrow that method into another object using call().
// 4. Write a program where you pass multiple arguments to a method using apply().
// 5. Create a function that uses bind() to permanently bind this to a specific object.
// 6. Write a program where a function defined outside an object is borrowed by multiple objects using call().
// 7. Write a program to demonstrate losing this inside a setTimeout() function and fix it using bind().
// 8. Create an object method that uses this and test it when assigned to a variable (to show undefined
// behavior without bind).
//  ------------------------------------------------------------
// DAY 13: Rest Parameter & Spread Operator
// 1. Write a function that takes an unknown number of arguments using the rest parameter and returns their
// sum.
// 2. Write a function that finds the maximum number from an array using the spread operator.
// 3. Write a program that merges two arrays using the spread operator.
// 4. Write a program that copies an object using the spread operator (deep vs shallow copy case).
// 5. Write a function with rest parameters that calculates the average of any number of inputs.
// 6. Write a program that combines multiple objects into one using the spread operator.
// 7. Write a program to remove duplicate values from an array using spread and Set.
// 8. Write a program where you pass extra arguments to a function and collect unused ones using rest
// parameters.
//  ---------------------------------------------------------------
// DAY 14: Array & Object Destructuring
// 1. Write a program that swaps two variables using array destructuring.
// 2. Write a program that extracts the first two elements of an array and stores the rest in another array
// using destructuring.
// 3. Write a program to destructure nested arrays and print individual values.
// 4. Write a program that extracts specific properties (name, age) from an object using destructuring.
// 5. Write a program that destructures an object and assigns default values if a property doesn’t exist.
// 6. Write a program to destructure a nested object (e.g., employee.address.city).
// 7. Write a function that accepts an object and uses parameter destructuring to print selected fields.
// 8. Write a program to swap keys and values in an object using object destructuring.
// -------------------------------------------------------------
// DAY 15: JSON (stringify & parse)
// 1. Write a program to convert a JavaScript object into a JSON string using JSON.stringify().
// 2. Write a program to convert a JSON string into a JavaScript object using JSON.parse().
// 3. Write a program that stringifies an object with nested properties and then parses it back.
// 4. Write a program that converts an array of objects into JSON and back to an array.
// 5. Write a program to store a JSON string in localStorage and retrieve it back as an object.
// 6. Write a program to filter specific properties while stringifying (using replacer function in JSON.stringify).
// 7. Write a program to pretty-print a JSON string with indentation.
// 8. Write a program to fetch JSON data from a variable and print values using JSON.parse().
//  ---------------------------------

// =====================================================================================
// Change text on button click
// 1) When you click a button, change the text inside a <p>

// Toggle background color
// 2) A button should toggle the background color between white and black.

// Show/Hide password
// 3) Input password field with a button to show/hide text.

//Count characters in input
// 4) Show live character count while typing.

// Form validation
// 5) Prevent form submission if fields are empty.
// =========================================================================================

// 1. Write a program to sort the characters of a string alphabetically.
// 2. Write a program that removes all duplicate characters from a string.
// 3. Create a program that checks whether two strings are anagrams of each other.
// 4. Write a program to mask the last 4 digits of a phone number (e.g., 9876543210 → ******3210)
// -------------------------
// 1. Write a program that finds the largest and smallest elements in an array.
// 2. Write a program that removes all duplicate elements from an array.
// 3. Create a program to reverse an array without using reverse() method.
// 4. Write a program to find the sum and average of all numbers in an array.
// ------------------------------
//1. Write a function that takes an unknown number of arguments using the rest parameter and returns their
// sum.
// 2. Write a function that finds the maximum number from an array using the spread operator.
// 3. Write a program that merges two arrays using the spread operator.
// 4. Write a program that copies an object using the spread operator (deep vs shallow copy case).
// 5. Write a function with rest parameters that calculates the average of any number of inputs.
