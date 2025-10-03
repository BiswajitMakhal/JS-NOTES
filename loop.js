//----------- FOR:

//  for loop pattern:
// for (start; end; change) {}

// Ex:

for (let i = 1; i < 101; i++) {
  // 1-100 projonto print hobe//
  console.log(i);
}

// start i-ar value 1, 1 101-ar theke small akbar print holo//
// then i++ ache mean 1plus hoe 2 hobe, i-ar value holo 2 ,abar 2 101-theke small tai abar print hobe, ai kore 100 projonto print hobe,//

//-----------WHILE:

//while loop pattern:
//                      start
//                      while (end) {
//                          //code//
//                          change
//                      }

//Ex:
let i = 1;
while (i < 51) {
  // 1-50 projonto loop hobe//
  console.log(i);
  i++;
}

// -------------DO-WHILE:

// do...while loop হলো এমন একটা লুপ যেটা অন্তত একবার চলবেই, কারণ এখানে condition পরে check হয়।

// do-while pattern:
//               do {
//               // যে কোড চলবে
//               } while (condition);

// কিভাবে কাজ করে:
// প্রথমে do { } এর ভিতরের কোড একবার execute হবে।
// তারপর while ( ) এর condition check হবে।
// যদি condition true হয়, তাহলে আবার কোড চলবে।
// যদি condition false হয়, তাহলে লুপ বন্ধ হয়ে যাবে।

// Ex:
let count = 10;
do {
  console.log(count);
  count++;
} while (count < 2); //condition false holeu , do-ar moddhe jei code ta ache seta akbar print hobe//

//---------------- BREAK AND CONTINUE:

//break:
let a = 28;
for (let a = 0; a < 41; a++) {
  console.log(a);
  if (a === 31) {
    break; //break loop সম্পূর্ণভাবে বন্ধ করে দেয় যেখানেই এটি লেখা থাকে। jodi a-tar value 31 hoi tahole break hoe jabe mean theme jabe//
  }
}

//continue:
let b = 35;
for (let b = 0; b < 41; b++) {
  if (b === 31) {
    continue; //continue current iteration skip করে পরের iteration এ চলে যায়।  31-skip hoe jabe.
  }
  console.log(b);
}

// -------------------THEORY-QUESTIONS:

// ✔️1. Print numbers from 1 to 10 using a for loop.
for (let d = 1; d <= 10; d++) {
  console.log(d);
}

// ✔️2. Print numbers from 10 to 1 using while loop.
let e = 10;
while (e > 0) {
  console.log(e); //while loop-a first code lekha hoi then change
  e--; //change
}

// ✔️3.Print even numbers from 1 to 20 using a for loop.

for (let s = 1; s < 21; s++) {
  if (s % 2 === 0) {
    console.log(s);
  }
}

// ✔️4.Print odd numbers from 1 to 15 using a while loop.

let v = 1;
while (v < 16) {
  if (v % 2 === 1) {
    console.log(v);
  }
  v++;
}

// ✔️5.Print the multiplication table of 5 (i.e., 5 × 1 = 5............5 × 10 = 50)

for (let x = 1; x <= 10; x++) {
  console.log(`5 x ${x} = ${5 * x}`);
}

// ✔️6. Find the sum of numbers from 1 to 100 using a loop.

let sum = 0;
for (let sm = 1; sm < 101; sm++) {
  sum = sum + sm; // sum += sm; ---> ai vabeu kora jai
}
console.log(sum);

// ✔️7. Print all numbers between 1 to 50 that are divisible by 3.

for (let d = 1; d < 51; d++) {
  if (d % 3 === 0) {
    console.log(d);
  }
}

// TimeStamp: (4:17:10)
// ✔️8. Ask the user for the number and print whether each number from 1 to that number is even or odd.
//      (e.g., "1 is odd", "2 is even", .....)

let val = prompt("give a number"); //JavaScript-এ prompt() হলো একটা built-in function, যেটা browser-এ popup dialog box খুলে ইউজারের কাছ থেকে input নেয়।

for (let n = 1; n < val; n++) {
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }
}

// ✔️9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.

for (count = 1; count <= 100; count++) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log(`${count} is divisible by both 3 and 5`);
  }
}

// ✔️10. Write a loop from 1 to 100 that :
//    👉   prints each number
//    👉   stop completely when it finds the first number divisible by 7

let prnt = 1;
while (prnt < 101) {
  if (prnt % 7 === 0) {
    break;
  }
  console.log(prnt);
  prnt++;
}

//jodi ami chai 7-tao print hok then sudhu console log take aage likhte hobe

let prnts = 1;
while (prnts < 101) {
  console.log(prnts);
  if (prnts % 7 === 0) {
    break;
  }
  prnts++;
}
