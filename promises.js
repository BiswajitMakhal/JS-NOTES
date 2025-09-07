//-------------- ASYNC OR SYNC CODE

// SYNC CODE : SYNCHRONOUS MANE HOLO AKTA KAAJ SESH NA HOLE PORER KAAJ SURU HOINA, JAVASCRIPT SADHARONOTO SINGLE-THREADED TAI CODE LINE BY LINE AKTAR POR AKTA CHALAI.

//ASYNC CODE : ASYNCHRONOUS MANE HOLO KAAJ GULO AKISATHE CHOLTE PARE KINTU AKTAR JONNO AR AKTA THEME THAKE NA, JAVASCRIPT KONO KAAJ KE PORE KORAR JONNO REKHE DEI JATE BAAKI GULO AAGE CHOLTE PARE.



//-------------- CALLBACK : AI FUNCTION TA HOLO SEI FUNCTION JETA ARAKTA FUNCTION-ER ARGUMENT HISEBE PATHANO HOI PARAMETER-A.


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





// --------------PROMISES: (PROMISE HOLO AKTA OBJECT, JETA BOLE DEI JE AKHON AMI RESULT DITE PARBO NA, VOBISHOT-A JODI SUCCESS HOI THEN RESULT DEBE NAHOLE ERROR DEBE. )

const myPromise = new Promise((resolve, reject) => {  //(resolve, reject) => { ... } অংশকে বলে executor function।// 
    let success = false;
    if (success) {
        resolve("✅Operation successful");
    } else {
        reject("❌Operation failed");
    }
});

myPromise
    .then((result) => {     //resolve hole .then cholbe, (result)--> holo parameter ar parameter hisebe sei value pabe jeta resolve-te pathano hoechilo//
        console.log(result);
    })
    .catch((error) => {     //reject hole .catch cholbe// (error)--> holo parameter ar parameter hisebe sei value pabe jeta reject-te pathano hoechilo//
        console.error(error);
    })
    .finally(() => {   //.finally sob somoi cholbe ,resolve hok or reject hok na keno, kichu kichu kaaj thake jeta sofol or bartho hok na keno korte hobei, jemon loading screen off kora , database connection close kora , memory free kora etc.//
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







