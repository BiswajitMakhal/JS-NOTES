//-------ARITHMETIC://

//    +, -, /, *, %, **

//+ => ADDITION AND CONCATENATION
//- => SUBTRACTION, / => DEVIDE, % => (MODULUS) REMAINDER
// ** => EXPONENTIATION (2 ** 3 = 8)

//--------COMPARISON://

//   =
//   == (NOT STRICT COMPARISON)
//   === (STRICT COMPARISON)
//   !=  (NOT STRICT COMPARISON)
//   !== (STRICT COMPARISON)
//   >= (GREATER THAN EQUAL)
//   <= (LESS THAN EQUAL)
//   <
//   >

//  =  VALUE DEOA
//  ==  VALUE EQUAL ACHE KINA DEKHE, TYPE CHECK KORE NA

let a = 12 == "12";
console.log(a);

// ===  TYPE CHECK KORE DEKHE JE SAME ACHE KINA
let b = 12 === "12";
console.log(b);

// !=  NOT EQUAL (DOUBLE EQUAL-TE JETA HOI SETA ULTO HOE JAI JOKHON VALUE EQUAL THAKE TOKHON FALSE HOI , AR JOKHON VALUE DIFFERENT THAKE TOKHON TRUE)
let c = 12 != "18"; //output true//
console.log(c);

//  !==  NOT EQUAL EQUAL (TRIPLE EQUAL-TE JETA HOI SETA ULTO HOE JAI ,ATEO NOT EQUAL-ER MOTO SAME KAJ KORE KINTU ATE TYPE CHECK HOI  )

//---------ASSIGNMENT OPERATOR://

let a = 12;
a += 2; //ai line tar mane hoche a-tar aager value te 2 addition kore abar a-tate save kora//
console.log(a);
a *= 3; //ager line add kore 14 hochilo tai tar sathe 3 multiply kore abar a-er moddhe save korche//
console.log(a);

//---------LOGICAL://

//    &&, ||, !

//  && => (AND OPERATOR) AR MANE HOCHE DUTO JODI CONDITION THAKE AR TAR MODHE JODI DUTOI TRUE HOI THEN OUTPUT TRUE HOBE

//EX: TRUE && TRUE => TRUE
//    TRUE && FALSE => FALSE
//    FALSE && TRUE => FALSE
//    FALSE && FALSE => FALSE

//  || => (OR OPERATOR) AR MANE HOCHE DUTO CONDITION-AR MODHE JODI JE KONO AKTA TRUE THAKE THEN OUTPUT TRUE HOBE

//EX:  TRUE || FALSE => TRUE

//  !  => (NOT) NOT JODI KICHUR AAGE LAGANO HOI THEN TRUE HOLE FALSE HOBE AR FALSE HOI THEN TURE HOBE, ULTO HOE JAI

//EX:  TRUE => FALSE (12>!50 =>TRUE)

//--------UNARY OPERATOR://

//      +, -, !, typeof, ++, --

// + => jodi string ta number-a convert kora jai then tar aage + lagiye dile number hoe jabe(Ex: +"5")

//typeof => kono kichur aage jodi amra typeof lagie dei then setar type jana jabe (Ex: tyepof "string")

// ++ => jodi plus plus aage likhi then seta pre-increment and pore likhle post-increment //
//       jodi pre-increment hoi then seta aage add hobe then print hobe or post-increment-ar khetre aage print hobe same value then jodi abar kokhono print kori tokhon add hobe

// -- => akhaneo same pre-decrement and post-decrement//
let a = 12;
a = ++a + 5; //pre-increment//
console.log(a);

let b = 12;
b = b++ + 5; //post-increment//
console.log(b); //first time same value print//

//---------TERNARY OPERATOR://
// ?, :

// Ternary Operator হলো if...else স্টেটমেন্টের shortcut version।
// এটা দিয়ে তুমি এক লাইনে condition check করতে পারো।

//Syntax:
//condition ? expression If True : expression If False

//  12 > 13 ? console.log(true) : console.log(false);

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//----------------- NULLISH COALESCING OPERATOR:
// ?? অপারেটরটি ব্যবহার করা হয় যখন কোনো ভ্যারিয়েবল null বা undefined হয়, তখন একটি বিকল্প মান (fallback value) দেওয়ার জন্য।

// এর মানে হলো,
// যদি value null বা undefined না হয়, তাহলে সেটাই ব্যবহার করো।
// আর যদি null বা undefined হয়, তাহলে fallback মানটা নাও।

// ?? শুধু null আর undefined এর ক্ষেত্রেই fallback নেয়।
//  কিন্তু 0, false, "" এগুলো valid value — তাই fallback নেয় না।
let a = null;
let b = undefined;
let c = 0;
let d = "Hello";

// একাধিক fallback ব্যবহার করা হচ্ছে
let result = a ?? b ?? c ?? d ?? "Default Value";

console.log(result);
//যখন interpreter c তে পৌঁছায়, দেখে এটা null/undefined না,
// তখন সেটাই ফাইনাল result হয়ে যায়।

// ===========================================================================================================================

// --------------SPREAD OPERATOR OR REST OPERATOR:

//1️⃣ Spread Operator (...)
// Spread operator ব্যবহার করা হয় array বা object-এর elements গুলোকে আলাদা করে ছড়িয়ে দেওয়ার জন্য।
// এটার প্রতীক হলো ... (তিনটা ডট)।

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let result = [...arr1, ...arr2];
console.log(result); //[1, 2, 3, 4, 5]

// 🔹 এখানে ...arr1 মানে arr1-এর সব value আলাদা করে নিয়ে আসা হয়েছে।
// 🔹 এটা সাধারণত array merge, copy বা function call-এর সময় ব্যবহার হয়।
// ----------------------------------------------------------------------------------------------------------------------------
// 2️⃣Rest Operator (...)
// Rest operator দেখতে একই (তিনটা ডট ...), কিন্তু কাজ উল্টো —
// এটা multiple values গুলোকে একত্র করে একটা array বা object হিসেবে ধরে রাখে।

function addNumbers(...numbers) {
  console.log(numbers);
}
addNumbers(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5]

// 🔹 এখানে ...numbers সব argument গুলোকে একত্র করে একটা array বানিয়েছে।
// 🔹 এটা function parameter হিসেবে বেশি ব্যবহার হয়।
