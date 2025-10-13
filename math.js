//                                       || ============================||
//                                       ||NUMBER OBJECT AND MATH OBJECT ||
//                                       || ============================||
// ------------------✅NUMBER OBJECT:
// In JavaScript, number মানে হলো যেকোনো সংখ্যা — যেমনঃ
// let x = 10;
// let y = 12.5;
// let z = -5;
// সব numeric value (integer, decimal, negative, etc.) — সবকিছু JavaScript-এ Number type-এর অন্তর্গত।

// JavaScript-এ মূলত দুই ধরনের সংখ্যা থাকে:
// | Type           | Example          | Description  |
// | -------------- | ---------------- | ------------ |
// | Integer        | 10, -45, 0       | পূর্ণসংখ্যা      |
// | Floating-point | 10.5, 3.1416     | দশমিক সংখ্যা  |

// Number Object তৈরি করার উপায়:
// Literal way:
let num = 25;

// Using Number object (constructor দিয়ে):
let nums = new Number(25);
// ⚠️ Note: সাধারণত প্রথম উপায়টাই (literal way) ব্যবহার করা হয়।
// দ্বিতীয়টা object বানায়, তাই তুলনা করলে একটু আলাদা আচরণ করে।
// Example:
let a = 10;
let b = new Number(10);
console.log(a == b); // true
console.log(a === b); // false

// ----------------USEFUL NUMBER METHODS:

// | Method           | Example                                | Description                     |
// | ---------------- | -------------------------------------- | ------------------------------- |
// |  toString()      |  (123).toString()                      | Number কে string-এ রূপান্তর করে  |
// |  toFixed(n)      |  (12.3456).toFixed(2)  →  "12.35"      | দশমিকের পরে কত সংখ্যা রাখবে     |
// |  toPrecision(n)  |  (12.3456).toPrecision(4)  →  "12.35"  | মোট digit সংখ্যা                 |
// |  valueOf()       |  (new Number(10)).valueOf()  →  10     | আসল numeric value return করে  |

// EXAMPLE:
let num = 12.34567;
console.log(num.toFixed(2)); // "12.35"
console.log(num.toPrecision(3)); // "12.3"
console.log(num.toString()); // "12.34567"

// ----------------NUMBER CONSTANT:

// | Constant                   | Description                   |
// | -------------------------- | ----------------------------- |
// |  Number.MAX_VALUE          | সর্বোচ্চ সংখ্যা                   |
// |  Number.MIN_VALUE          | সর্বনিম্ন সংখ্যা (> 0)             |
// |  Number.POSITIVE_INFINITY  | অসীম ধনাত্মক মান              |
// |  Number.NEGATIVE_INFINITY  | অসীম ঋণাত্মক মান              |
// |  Number.NaN                | “Not a Number”                |

// EXAMPLE:
console.log(Number.MAX_VALUE);
console.log(Number.NaN); // Not a Number

// ============================================================================================================================================//

// ---------------------✅MATH OBJECT:
// Math object হলো একটা static object, মানে এটাকে new দিয়ে বানাতে হয় না।

// MATH METHODS:
// | Method                | Example                                                  | Description                |
// | --------------------- | -------------------------------------------------------- | -------------------------- |
// | `Math.abs(x)`         | `Math.abs(-5)` → `5`                                     | Absolute value             |
// | `Math.round(x)`       | `Math.round(4.7)` → `5`                                  | নিকটতম পূর্ণসংখ্যা            |
// | `Math.ceil(x)`        | `Math.ceil(4.2)` → `5`                                   | উপরের পূর্ণসংখ্যা              |
// | `Math.floor(x)`       | `Math.floor(4.9)` → `4`                                  | নিচের পূর্ণসংখ্যা               |
// | `Math.sqrt(x)`        | `Math.sqrt(9)` → `3`                                     | বর্গমূল                       |
// | `Math.pow(x, y)`      | `Math.pow(2, 3)` → `8`                                   | ঘাত                         |
// | `Math.min(...values)` | `Math.min(3,5,1)` → `1`                                  | সর্বনিম্ন                      |
// | `Math.max(...values)` | `Math.max(3,5,1)` → `5`                                  | সর্বোচ্চ                      |
// | `Math.random()`       | `Math.random()` → `0` থেকে `1` এর মধ্যে র‍্যান্ডম সংখ্যা | Random number generate করে       |
// | `Math.trunc(x)`       | `Math.trunc(4.9)` → `4`                                  | দশমিক বাদ দেয়              |

// EXAMPLE:
// Random number between 0 and 1
console.log(Math.random());

// Random number between 1 and 10
let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
// 👉 এখানে Math.random() 0–1 এর মধ্যে মান দেয়,
// তারপর *10 দিলে 0–10 এর মধ্যে,
// আর Math.floor() দিলে নিচের পূর্ণসংখ্যা পাওয়া যায়।

// REAL LIFE USE EXAMPLE:
let marks = [45, 78, 23, 90, 56];
console.log("Highest:", Math.max(...marks));
console.log("Lowest:", Math.min(...marks));
