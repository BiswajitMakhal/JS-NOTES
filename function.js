// ------------FUNCTION

//FUNCTION HOLO REUSABLE CODE BLOCK SUDHU AKBAR FUNCTION LIKHE BARBAR FUNCTION CALL KORE AMRA CHALATE PARI

// FUNCTION DECLARATION (OR NAME FUNCTION OR FUNCTION STATEMENT)
function example() {
  console.log("The code runs when you call this function.");
}
example();
example();

//FUNCTION EXPRESSION
let example1 = function () {
  console.log("function with variable");
};
example1();

// FAT ARROW FUNCTION (ES6)
let example2 = () => {
  console.log("this is a Arrow Function");
};
example2();

// Implicit return শুধু arrow function-এর জন্য কাজ করে।

let square = (num) => num * num; //Arrow function - এক লাইনের জন্য implicit return

console.log(square(4)); // 16

// ANONYMOUS FUNCTION:
// কোনো নাম নেই function-এর।
// সাধারণত callback function বা event listener হিসেবে ব্যবহার হয়।
setTimeout(function () {
  console.log("Hello after 2 seconds"); //2-SECOND por function ta chalanor jonno setTimeout use hoi , aar ata just anonymous function-er akta example//
}, 2000);

// ------------PARAMETER:(PARAMETER HOLO SEI JAIGA JEKHANE FUTURE VALUE MANE ARGUMENT JABE)

function example3(v1) {
  //v1 holo parameter//   (argument ta jabe parameter-a ar parameter-ar value holo v1 )
  console.log(`${v1} is boring`);
}
example3("HTML"); //argument//
example3("CSS"); //argument//
example3("JS"); //argument//

function add(v1, v2) {
  console.log(v1 + v2);
}
add(11, 22);
add(20, 15);

// ------------DEFAULT PARAMETER: (ARGUMENT NA THAKLE DEFAULT VALUE DEBO)

function example4(v1 = 0, v2 = 0) {
  console.log("This is a addition", v1 + v2);
}
example4();

// ------------REST PARAMETER: (JOKHON ARGUMENT-A VALUE ONEK GULO THAKE TOKHON AI PARAMETER ... USE KORBO)

function example5(...val) {
  console.log(val);
}
example5(1, 2, 3, 4, 5, 6, 7, 8);

function example6(v1, v2, ...val) {
  console.log(v1, v2, val);
}
example6(1, 2, 3, 4, 5, 6, 7, 8, 9);

// -----------RETURN: (RETURN KORLE FUNCTION AKTA VALUE FEROT DEI, JETA AMRA VARIABLE-A RAKHTE PARI ABAR ONNO KOTHAO BABOHAR KORTE PARI jokhon amra function call korbo)

function example7(a) {
  return 26 + a;
}

let a = example7(12);
console.log(a);

//------------- FIRST CLASS FUNCTION:  (FUNCTION KE AMRA AKTA VALUE/DATA-AR MOTO USE KORTE PARI, MANE AI FUNCTION KE VARIABLE-AR MODHE RAKHA JAI , ONNO FUNCTION-ER ARGUMENT HISEBE PAHTANO JAI, ABAR FUNCTION THEKE RETURN TAO KORA JAI)

function example8(val) {
  val();
}
example8(function () {
  //akhane argument ar vitore function chalanor por seta parameter-a (val) jache then function call korle outpur bar hoche
  console.log("first class function");
});

//--------------- HIGHER ORDER FUNCTION :(HIGHER ORDER FUNCTION HOLO AMON AKTA FUNCTION JEITA ONNO FUNCTION KE ARGUMENT HISEBE NITE PARE, OR AREKTA FUNCTION RETURN KORTE PARE OR DUTOI KORTE PARE )

// EX-1: JEI FUNCTION PARAMETER-AR MODDHE ONNO FUNCTION ACCEPT KORE--->

function hof() {
  console.log("This is a higher order function");
}
hof(function () {});

// EX-2: JEI FUNCTION RETURN KORE ARAKTA FUNCTION--->

function hof2() {
  return function () {
    console.log("This is a also higher order function");
  };
}
hof2()(); //prothom bracket ta main function call korar jonno, ar second bracket ta return function call korar jonno//

// -------------PURE AND IMPURE FUNCTIONS:

// PURE FUNCTION:-----> SOB SOMOI AKI INPUT DILE AKI OUTPUT DEBE, AR BAIRER KONO DATA CHANGE KORE NA.

let pure = "pure function";
function sure() {
  return "I am a pure function"; //return-ar jaigai console.log korle aita impure hoejeto ,karon console korle bairer environment change hoto
}
let sss = sure(); // ai duto line ke ak line teu kora jai --->
console.log(sss); // console.log(sure());

//IMPURE FUNCTION:-----> AKI INPUT DILEO OUTPUT CHANGE HOTE PARE, BAIRER VALUE CHANGE KORE OR BAIRER ENVIRONMENT-AR UPORE NIRVOR KORE

let mpure = 22;

function impure() {
  mpure++;
  console.log(mpure);
}
impure();

//---------------------CLOSURES AND LEXICAL SCOPING:

//✅CLOSURE:
// Closure মানে —
// যখন একটা function তার নিজের বাইরের (parent) function-এর variable গুলোকে মনে রাখে এবং ব্যবহার করতে পারে,
//যদিও parent function টা শেষ হয়ে গেলেও।
// তখনই সেটা closure।

//Ex-1:
function abcd() {
  let a = 20;
  return function () {
    console.log(a); //nijer parent function-ar variable take use korche//
  };
}
// Ex-2:
function test() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}

let inc = test();
inc(); //--> 1
inc(); //--> 2
// ➡️ এখানে counter এখনো memory-তে আছে কারণ inc() ওটা ধরে রেখেছে।
// তুমি যতবার inc() call করবে, value বেড়ে যাবে —
// এটাই proof যে data এখনো মুছে যায়নি।

//Ex-3:
//Without Closure Version:
function test() {
  let counter = 0; // local variable

  counter++;
  console.log(counter);
}

test(); //--> 1
test(); //--> 1 again (counter reset each time)

//✅LEXICAL SCOPING:
// Lexical scope মানে হলো:
// কোনো variable কোন function বা block-এর ভিতরে define হয়েছে, সেই location অনুযায়ী তার accessibility ঠিক করা হয়।
// অর্থাৎ variable কোথায় declare হয়েছে, সেই জায়গার context অনুযায়ী সেটি accessible বা inaccessible হবে।

function abcd() {
  let x = 20;
  function efgh() {
    let y = 30;
  }
  function ijkl() {
    let z = 40;
  }
}
//☝️akhane abcd-> function tar curly braces jekhane ase sesh hobe totodur x-> variable take access korte parbo
//efgh or ijkl --> function-er curly braces jotodur ache totodur oder bhitorer code ta access korte parbo

//------------------IIFE(IIFE = Immediately Invoked Function Expression, এটা এমন একটি JavaScript function যা declare করার সাথে সাথে তৎক্ষণাৎ execute হয়ে যায়।)

//function-ar name hoina
(function () {
  console.log("hey, I am IIFE");
})();

//------------------HOISTING DIFFERENCES BETWEEN DECLARATION AND EXPRESSION:

//✅FUNCTION DECLARATION:
// Function declaration hoist হয় পুরো function সহ
// তাই তুমি function call করতে পারো function declare করার আগে

greet(); // Hello, Declaration korar aage call kora hoehce,

function greet() {
  console.log("Hello");
}
//☝️✔️ Hoist হয় পুরো function সহ

//✅ FUNCTION EXPRESSION:
// Function expression variable-এর সাথে assign হয়
// Variable declaration let sayHi hoist হয়, কিন্তু value assignment হয় না
// তাই আগে call করলে Error হবে

sayHi(); // Error: sayHi is not a function

let sayHi = function () {
  console.log("Hi");
};
//☝️✔️ Variable declaration hoist হয়, ❌ function value নয়

//------------------------QUESTIONS:

//✔️1.Predict the output.
function sayhi(name = "Guest") {
  console.log("Hi", name);
}
sayhi();
//Ans: Hi Guest

// ✔️2.Use rest parameter to accept any number of scores and return the total.
function getScore(...scores) {
  let total = 0;
  scores.forEach(function (val) {
    total = total + val;
  });
  return total;
}
console.log(getScore(10, 12, 14, 18));

//✔️3.Fix the function using early return.
// function checkAge(age) {
//   if (age < 18) {
//     console.log("Too young");
//   } else {
//     console.log("Allowed");
//   }
// }
function checkAge(age) {
  if (age < 18) return "Too young";
  return "Allowed";
}
console.log(checkAge(12));

//✔️4.Pass a function into another function and execute it inside.
function abcd(val) {
  val();
}
abcd(function () {
  console.log("hey");
});

//✔️5.Write a BMI calculator.
function bmi(weight, height) {
  return weight / (height * height);
}
console.log(bmi(69, 1.7).toFixed(2)); //weight=69kg, height=1.7meter

// ✔️6.Create a reusable discount calculator (HOF).
function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}
let discounter = discountCalculator(10); //10% OFF
console.log(discounter(200)); //jei amount tar discount bar korte chaichi//
