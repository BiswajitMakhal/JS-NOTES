//------------Array

//SADHARONOTO VARIABLE AKTA VALUE HOLD KORE, KINTU ARRAY TE MULTIPLE VALUE STORE KORE RAKHTE PARI, AITA HOLO AKTA LIST JEKHANE DATA GULO ORDER HISEBE THAKE.

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Mango"

//------------ARRAY CONCEPT:

// --------------Push:(JavaScript এ push() হলো Array method, যেটা ব্যবহার করে array এর শেষে নতুন element যোগ করা হয়।)
let frts = ["apple", "banana"];
frts.push("mango");
console.log(frts);
// ["apple", "banana", "mango"]

// ---------------Pop:(JavaScript এ pop() হলো Array method, যেটা array এর শেষ element মুছে ফেলে এবং সেই element return করে।)
let fruits1 = ["apple", "banana", "mango"];
let removed = fruits1.pop();

console.log(fruits1); // ["apple", "banana"]
console.log(removed); // "mango"

//---------------Shift:(JavaScript এ shift() হলো Array method, যেটা array এর প্রথম element মুছে ফেলে এবং সেই element return করে।)

let fruits2 = ["apple", "banana", "mango"];
let removed1 = fruits2.shift();

console.log(fruits2); // ["banana", "mango"]
console.log(removed1); // "apple"

// -------------Unshift:(JavaScript এ unshift() হলো Array method, যেটা array এর শুরুতে নতুন element যোগ করে। এবং return করে array এর নতুন length।)

let fruits3 = ["banana", "mango"];
fruits3.unshift("apple");

console.log(fruits3);
// ["apple", "banana", "mango"]

//--------REVERSE

let a = [1, 2, 3, 4, 5, 6];
let b = a.reverse(); //reverse hoe jabe//
console.log(b);

// -------SORT(SORT HOCHE ASCENDING OR DECENDING ORDER-A SAJATE PARE, SORT FUNCTION ACCEPT KORE, ABAR ALPHABETICAL ORDER-TE SAJATEO SAHAJJO KORE)
// Ex:1

let srt = ["apple", "cherry", "banana", "mango"];
srt = srt.sort();
console.log(srt);

// Ex:2

let srrt = [14, 40, 2, 6, 10, 25, 35];
srrt = srrt.sort(function (a, b) {
  //( ) bracketer modhe jeta lekha setake compare function bole

  return a - b; //ascending order (a-b likhle ascending orderte sajate parbo)
});
console.log(srrt);

// EX:3

let srtt = [14, 40, 2, 6, 10, 25, 35];
srtt = srtt.sort(function (a, b) {
  return b - a; //descending order (b-a likhle descending orderte sajate parbo)
});
console.log(srtt);

// SORT, FOR EACH , MAP, REDUCE, FILTER --> SOBAI NIJER MODDHE FUNCTION ACCEPT KORE

// -----------MAP (MAP SUDHU TOKHONI USE KORTE HOI JOKHON AMADER NEW ARRAY BANATE HOI AAGER ARRAY-ER DATAR BASIS-A, always length same thake.)

// 👉 map() হলো Array method।
// এটা প্রতিটি element-এর উপর function চালায় এবং একটা নতুন array return করে।
// মূল array change হয় না।

// EX:1
let maf = [12, 25, 13, 28, 32];
let newmaf = maf.map(function (val) {
  return 12; //return na korle undefined hoi//
});
console.log(newmaf);

// EX:2
let arr = [12, 20, 3, 5, 28, 40];
let newarr = arr.map(function (val) {
  if (val > 10) return val; //condition onujai jeta print hobar kotha seta print hobe//
});
console.log(newarr);

// ------------FILTER (FILTER HOLO JAVASCRIPT-ER AKTA ARRAY METHOD ,JETA ARRAY-ER ELEMENTS KE BECHE NIYE NEW ARRAY CREATE KORE,FILTER KONO ELEMENT-KE MUCHE FELENA BORONG CONDITION TRUE HOLE SUDHU SEI ELEMENT KE NEW ARRAY TE RAKHE,length kom hote pare)

let fil = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newfil = fil.filter(function (val) {
  if (val > 5) return true;
});
console.log(newfil);

// ------------REDUCE (REDUCE HOLO JAVASCRIPT-ER ARRAY METHOD,JETA ARRAY-ER SOB ELEMENTS KE AKSATHE AKTA SINGLE VALUE TE KOMIYE DEI. * SUM, PRODUCT, MAX, MIN OR ONNO KONO CUMULATIVE CALCULATION KORAR JONNO REDUCE USE KORA HOI.)

let red = [1, 2, 3, 4, 5, 6];
let newred = red.reduce(function (accumulator, current) {
  return accumulator + current; //accumulator holo reduce method-er first variable jeta array-er prottek element process korar somoy previous result joma rakhe. or current value hoche akhon je elements ta process hoche.//
}, 0); // akhane jehutu zero diechi tai accumulator first zero thakbe then current value ase add hote thakbe accumulator-a//
console.log(newred);

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

// -------------FIND:

// find() হলো Array method।

// এটা array-এর প্রতিটি element-এর উপর condition (test function) চালায়।

// যেই element সবার আগে condition pass করে → সেটা return করে।

// যদি একটাও match না পায় → undefined return করে।

let users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Mita" },
  { id: 2, name: "Biswajit" },
  { id: 3, name: "Sohan" },
];

let user = users.find((u) => u.id === 2); //aita single line implicit return hoche ate curly braces na dileo chole sudhu arrow function-ar jonno , ar jehutu akhane akta parameter use hoche tai bracket deoa hoini parameter-a

console.log(user);

// output---> akhane output id:2, name: Mitra asbe jodio id:2 duto ache kintu jehutu first id tar pori condition match kore jache porer ta tai print hobe na.
