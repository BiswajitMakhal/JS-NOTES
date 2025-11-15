//-------------- ASYNC OR SYNC CODE

// SYNC CODE : SYNCHRONOUS MANE HOLO AKTA KAAJ SESH NA HOLE PORER KAAJ SURU HOINA, JAVASCRIPT SADHARONOTO SINGLE-THREADED TAI CODE LINE BY LINE AKTAR POR AKTA CHALAI.

//ASYNC CODE : ASYNCHRONOUS MANE HOLO KAAJ GULO AKISATHE CHOLTE PARE KINTU AKTAR JONNO AR AKTA THEME THAKE NA, JAVASCRIPT KONO KAAJ KE PORE KORAR JONNO REKHE DEI JATE BAAKI GULO AAGE CHOLTE PARE.

// Example of ASYNCHRONOUS:

console.log("start"); //synchronous code  jeta immediate run hoi

setTimeout(() => {
  console.log("middle"); //akhane setTimeout javascript-er asynchronous function , akhane code ta call stack-a jabe na first 1 second timer end hole callback queue te jabe, then event loop check kore je call stack khali ache kina,jehutu akhane khali ache tai callback queue theke call stack-a pathai tarpor run hoi.//
}, 1000);

console.log("end"); //atao synchronous code

// OUTPUT:
// start
// end
// middle

//-------------- CALLBACK : AI FUNCTION TA HOLO SEI FUNCTION JETA ARAKTA FUNCTION-ER ARGUMENT HISEBE PATHANO HOI PARAMETER-A.

// ---------------CALLBACK HELL:
// Callback Hell মানে হলো — যখন অনেকগুলো callback function একটার ভিতরে আরেকটা nested হয়ে যায়, তখন কোড দেখতে খুব জটিল,
//  লম্বা আর বোঝা কঠিন হয়ে পড়ে।
// এমন কোডকে বলে “callback hell” বা “pyramid of doom”।

doTask1(function () {
  console.log("Task 1 done");

  doTask2(function () {
    console.log("Task 2 done");

    doTask3(function () {
      console.log("Task 3 done");

      doTask4(function () {
        console.log("Task 4 done");
      });
    });
  });
});

// 👉doTask1 কাজ শেষ হলে callback কল করে
// 👉তার ভিতরে doTask2 আবার callback নেয়
// 👉তারপর doTask3
// 👉তারপর doTask4
// 👉এভাবে nested → nested → nested → বেশি গভীর হয়ে যায়
// 👉এটাই হচ্ছে callback hell (Pyramid of Doom).

// ------------STACK: STACK HOLO AKTA DATA STRUCTURE, LIFO (LAST IN FIRST OUT) METHOD-A CHOLE, JETA SOBAR SESHE DHUKCHE SETA SOBAR AAGE BER HOBE.

// Push A → [A]
// Push B → [A, B]
// Push C → [A, B, C]
// Pop → C বের হবে (কারণ শেষবার ঢুকেছিলো)

//------------- CALL STACK: Call Stack হলো JS Engine-এর ভেতরের একটি মেকানিজম যা কোড (function calls) চালাতে Stack ডাটা স্ট্রাকচার ব্যবহার করে।

// যখনই একটা ফাংশন কল হয় → সেটা Call Stack-এর উপরে পুশ হয়।

// ফাংশন শেষ হলে → সেটা পপ হয়ে যায়।

// EXAMPLE:
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();

// DRY RUN (CALL STACK):

//1. one() → Call Stack - এ ঢোকে

//2. ভিতরে two() কল হয় → Call Stack - এ ঢোকে

//3. console.log("Hello") চালায় → "Hello" প্রিন্ট → console.log Stack থেকে বের

//4. two() শেষ → Stack থেকে বের

//5. one() শেষ → Stack থেকে বের

// 👉 শেষে Call Stack ফাঁকা

// --------------PROMISES: (PROMISE HOLO AKTA OBJECT, JETA BOLE DEI JE AKHON AMI RESULT DITE PARBO NA, VOBISHOT-A JODI SUCCESS HOI THEN RESULT(resolve) DEBE, NAHOLE ERROR(reject) DEBE. )

// কিন্তু ভবিষ্যতে তিনটার মধ্যে একটা হবে:

// 1. Pending → কাজ চলছে

// 2. Resolved / Fulfilled → কাজ সফল হলে result দেবে

// 3. Rejected → কাজ ব্যর্থ হলে error দেবে

// PROMISE WITH VARIABLE:

const myPromise = new Promise((resolve, reject) => {
  //(resolve, reject) => { ... } অংশকে বলে executor function।.   resolve এবং reject এগুলো executor function এর parameters//
  let success = false;
  if (success) {
    //if block sudhu tokhoni run hoi jokhon condition true hoi false hole skip hoi//
    resolve("✅Operation successful");
  } else {
    reject("❌Operation failed");
  }
});

myPromise
  .then((result) => {
    //resolve hole .then cholbe, (result)--> holo parameter ar parameter hisebe sei value pabe jeta resolve-te pathano hoechilo//
    console.log(result);
  })
  .catch((error) => {
    //reject hole .catch cholbe// (error)--> holo parameter ar parameter hisebe sei value pabe jeta reject-te pathano hoechilo//

    console.error(error); //kono kichu error or warning-er jonno aita use hoi//
  })
  .finally(() => {
    //.finally sob somoi cholbe ,resolve hok or reject hok na keno, kichu kichu kaaj thake jeta sofol or bartho hok na keno korte hobei, jemon loading screen off kora , database connection close kora , memory free kora etc.//
    console.log("Promise completed");
  });

// ------------EXECUTOR FUNCTION:

// যখন আমরা নতুন একটি Promise তৈরি করি, তখন ভেতরে যে ফাংশনটা লিখি তাকে বলা হয় executor function।

// 👉 Promise তৈরি করার সময়ই এই ফাংশনটা সাথে সাথেই রান হয়।
// 👉 এর কাজ হলো ঠিক করা কখন resolve হবে আর কখন reject হবে।

// EXAMPLE:
const promise = new Promise(function executor(resolve, reject) {
  // এখানে কাজ লেখা হবে
});

// PROMISE WITH ASYNCHRONOUS OR FUNCTION :

// EX:1
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //setTimeout holo js-ar built-in function, jeta bole ai function ke akhuni use korona khanikhon por koro//
      let dataFound = true;
      if (dataFound) {
        resolve({ id: 1, name: "Pizza" });
      } else {
        reject("Data not found");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log("Received:", data)) //aita single line arrow function use hoeche tai arrow-tar por curly braces use hoini
  .catch((err) => console.error("Error:", err));

// EX:2
let ExPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let name = true;
      if (name) {
        resolve("Name: Biswajit");
      } else {
        reject("Data is not found");
      }
    }, 4000);
  });
};

ExPromise()
  .then((result) => {
    console.log(result);
    return "Data is found"; //.then-ar moddhe return korale seta porer .then moddhe deoa parameter-a jai //
  })
  .then((re) => {
    console.log(re);
  })
  .catch((error) => {
    //akhane sudhu akta parameter ache bole bracket deoa hoini, multiple parameter thakle dite hoto , akhane na dileo chole//
    console.log(error);
  })
  .finally(() => {
    console.log("Promise completed wihout async and await");
  });

//------------ ASYNC- AWAIT

// ASYNC: JavaScript এ async হলো একটা কীওয়ার্ড, যেটা আমরা function এর আগে লিখি ,এটা বোঝায় যে ওই function টা asynchronous ভাবে কাজ করবে এবং সবসময় Promise return করবে। ।

// AWAIT: await হলো JavaScript এর একটা কীওয়ার্ড যেটা শুধু async function এর ভেতরে ব্যবহার করা যায়।
// এর কাজ হলো —

// 👉 কোনো Promise resolve (অথবা reject) না হওয়া পর্যন্ত কোড execution কে থামিয়ে রাখা।

// TRY AND CATCH : JavaScript-এ try...catch হলো error (ভুল) ধরার ব্যবস্থা। মানে, তুমি এমন কোড চালাতে পারো যেটাতে ভুল হবার সম্ভাবনা আছে। যদি ভুল হয় → প্রোগ্রাম বন্ধ হবে না, বরং সেটা catch ব্লকে ধরা পড়বে।

let ExAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let Data = true;
      if (Data) {
        resolve("Data: I am an async and await's example");
      } else {
        reject("Data is not found");
      }
    }, 5000);
  });
};

let Show = async () => {
  try {
    let ResolveValue = await ExAsync(); //akhane jodi variable na dao tahole resolve-r data ta akhane transfer hobe na, tai akahne ResolveValue bole variable naoa holo//
    console.log(ResolveValue);

    let user = "AsyncData is found";
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

Show();
