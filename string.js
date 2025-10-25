//-----------STRING CONCEPT

// --------CASE CONVERSION:
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"

// --------SPLIT:(split() হচ্ছে JavaScript-এর একটা string method ,যেটা একটা string কে ভেঙে array বানিয়ে ফেলে।)

let a = "I am a good boy";
a = a.split(""); //aita letter wise split, double quotation-ar moddhe jodi gap dei, than oita word wise split hobe(gap tao print hobe)//
console.log(a);

let b = "I am a good boy";
let c = b.split(" "); //akhane double quotation-ar moddhe gap deoa hoeche tai aita word wise split hobe(word wise-a gap print hoina )//
console.log(c);

let x = "I, am, a, good, boy";
x = x.split(","); //double quotation-ar moddhe jeta likhbo seta hatiye debe//
console.log(x);

let d = "I am a good boy";
d = d[3].split(""); //index wise split vabe kaaj korche
console.log(d);

let e = "I am a good boy";
e = e.split("", 4); //position wise split hoche , jotota position number debo tototai print hobe ,gap tao count hoche(aita letter wise position hoche)
console.log(e);

let f = "I am a good boy";
f = f.split(" ", 4); //position wise split hoche, akhane gap deoa hoche tai aita word wise poistion hoche
console.log(f);

// -----------------JOIN: (join() হচ্ছে Array method,👉 এটা array-এর সব elements একসাথে জুড়ে (join করে) একটা string বানায়।)
let arr = ["h", "e", "l", "l", "o"];
let result = arr.join(""); //split-er por aita use kora jai, karon split letter or word wise array banai
console.log(result);

//--------LENGTH:

let a = "   Biswajit Makhal ";
console.log(a.length); //koto gulo elements ache seta bojhar jonno length use kori,space tao count hoi//

let b = "   Biswajit Makhal ";
b = b.trim().length; //unusual space ke hatiye dei kintu middle-ar gap ta thakbei//
console.log(b);

//--------REPLACE:

let c = "Biswajit Makhal";
c = c.replace("Makhal", "Dutta"); //first tai ki replace korte hobe , tarporer tai konta diye replace korbo//
console.log(c);

let d = "Biswajit Makhal";
d = d.replace(" ", ""); //middle-ar space ta hatanor jonno, space ta replace korlam nothing diye//
console.log(d);

// ------------------INCLUDES():

// includes() হলো একটি built-in method যা চেক করে যে একটি array বা string-এর মধ্যে নির্দিষ্ট value আছে কি না।
// এটি boolean রিটার্ন করে: true বা false।

// 1️⃣. Array-এর ক্ষেত্রে:
//SYNTAX:
// array.includes(element, startIndex)

// 1. element → যা খুঁজতে চাই
// 2. startIndex (Optional) → কোন index থেকে খুঁজতে শুরু করবে (ডিফল্ট = 0)

let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango")); // false
console.log(fruits.includes("orange", 2)); // true
console.log(fruits.includes("orange", 3)); // false

// 👉Array → element খুঁজে।

// 2️⃣. String-এর ক্ষেত্রে:
//SYNTAX:
// string.includes(searchString, position)

// 1. searchString → যা খুঁজতে চাই
// 2. position (Optional) → কোন index থেকে search শুরু করবে (ডিফল্ট = 0)

let text = "I am learning JavaScript";

console.log(text.includes("JavaScript")); // true
console.log(text.includes("Python")); // false
console.log(text.includes("learning", 10)); // true
console.log(text.includes("I", 2)); // false

// 👉String → substring খুঁজে।

// ----------------SUBSTRING():
// JavaScript এ substring() হলো একটা built-in string method, যেটা কোনো string থেকে নির্দিষ্ট অংশ (substring) কেটে আনে।

// SYNTAX:
// string.substring(startIndex, endIndex)
let str = "JavaScript";
let subString = str.substring(0, 4);
console.log(subString);
