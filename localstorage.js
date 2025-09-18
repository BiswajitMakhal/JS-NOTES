
// ------------------ Local Storage কী?

// Local Storage হলো browser-এর একটা built-in storage system যেখানে তুমি data user-এর browser-এ স্থায়ীভাবে (permanent) সংরক্ষণ করতে পারো।

// 👉 মানে:

// তুমি যদি কোনো data Local Storage এ রাখো → সেটা browser বন্ধ করলেও মুছে যাবে না।

// Data থাকবে যতক্ষণ না user সেটা clear করে বা তুমি কোড দিয়ে remove করো।

// Storage limit LocalStorage এর (5–10 MB)।




// LocalStorage এর ব্যবহার কোথায় হয়?

// 1. User Preferences (Theme, Language সেটিংস)

// 2. Shopping Cart Data

// 3. Form Data Save করা

// 4. Offline Applications (ইন্টারনেট ছাড়া কাজ চালানো যায়)



// localStorage only for Browser//
localStorage.setItem("UserName", "Biswajit"); //data store korar jonno aita use hoi, akhane Biswajit hoche value ar UserName hoche ki name-a save korte chai//

console.log(localStorage.getItem("UserName")); //getItem: এটা storage-এর ভেতরে যে key(UserName) দিয়ে তুমি data save করেছো, সেই key দিয়ে value বের করে আনে।

localStorage.removeItem("UserName");  //Remove Item (delete specific key)

localStorage.setItem("UserName", "Makhal"); //update korar jonno same amra setItem use kori ,jodi key na thake new key banai or jodi key thake tahole update kore//

console.log(localStorage.length); //Length (কতগুলো key আছে) already browser-a show kore length

localStorage.clear(); //sob data delete hoe jabe//



// localStorage-a array, object,number store kora jai na sudhu matro string-a save hoi localStorage,
//তুমি যদি number,array বা object দাও → সেটা internally string হয়ে যায়।

// sei karone localStorage-a array , object or number store koranor jonno prothome seta string-a bodlate hoi JSON.stringify diye ,
// jarkarone jokhon amra getItem diye localStorage diye data bar kori seta string hisebe ber hoi.
// to string-ke amra natural form-a anar jonno abar JSON.parse() kori.


let user = { name: "Biswajit", age: 22 };
localStorage.setItem("user", JSON.stringify(user));

let savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // Biswajit//





// ----------------  Session Storage কী?

// Session Storage হলো browser এর temporary storage system।

// 👉 মানে:

// Data শুধু একটা tab/session এর জন্য থাকে।

// তুমি tab বা browser বন্ধ করলে data মুছে যায়।

// ব্যবহার হয় অস্থায়ী (temporary) data রাখার জন্য।

// Storage limit প্রায় LocalStorage এর মতোই (5–10 MB)।




// SessionStorage কোথায় ব্যবহার হয় ?

// 1. টেম্পোরারি ফর্ম ডেটা সংরক্ষণ
//     (যেমন কোনো ফর্ম ফিলআপের সময় হঠাৎ পেজ রিফ্রেশ হলে ডেটা না হারানো)।

// 2. Shopping Cart(Temporary Checkout)
//    ব্রাউজার বন্ধ করলে ডেটা মুছে যাবে।

// 3. Single Session User Settings
//    যেমন একটি সেশন চলাকালীন ভাষা / থিম পছন্দ রাখা।



// localStorage-ar motoni onekta sessionStorage

localStorage.setItem("UserName", "Biswajit");

console.log(localStorage.getItem("UserName"));

localStorage.removeItem("UserName");

localStorage.setItem("UserName", "Makhal");

console.log(localStorage.length);

localStorage.clear();






//------------------------   Cookies কী?

// Cookies হলো ছোট ছোট data যেগুলো browser user-এর machine এ save করে এবং server এ পাঠায় প্রতিবার request করার সময়।

// 👉 মানে:

// মূলত server ↔ client communication এর জন্য ব্যবহার হয়।

// সাধারণত login info, tracking data, preferences রাখে।

// Data সাধারণত 4KB সীমার মধ্যে হয়।

// Cookies এর expiry date থাকতে পারে (যেমন 7 দিন পর মুছে যাবে)।




//  Cookie কেন ব্যবহার হয়?

// 1.  Authentication (লগইন মনে রাখা)

//     তুমি যখন কোনো সাইটে লগইন করো, তখন তোমার আইডি/সেশন Cookie-তে রাখা হয়।

//     ফলে বারবার পাসওয়ার্ড দিতে হয় না।

// 2. Personalization (কাস্টমাইজড এক্সপেরিয়েন্স)

//    যেমন তুমি dark mode বেছে নিলে, Cookie সেটা মনে রাখে।

// 3. Tracking / Analytics (ব্যবহারকারীর আচরণ ট্র্যাক করা)

//    কোন পেজে কতবার গেলে, কি খুঁজলে, কতক্ষণ থাকলে—এগুলো Cookie-এর মাধ্যমে ট্র্যাক করা যায়।



// Ex:
// Cookie সেট করা
document.cookie = "username=Biswajit; expires=Fri, 20 Sep 2025 12:00:00 UTC; path=/";

// সব Cookie দেখা
console.log(document.cookie);

// "username=Biswajit; ..."

// 👉 এখানে username হলো key আর Biswajit হলো value।
//     মানে, cookie তে তুমি একটা নাম-ভ্যালু pair রাখছো:


// expires=Fri, 20 Sep 2025 12:00:00 UTC;

// 👉 এটা বলে দিচ্ছে কবে cookie মেয়াদ শেষ হবে (expire হবে)।

//     20 September 2025, দুপুর 12:00 (UTC time) এ cookie মুছে যাবে।

//     যদি expires না দাও → তাহলে cookie browser বন্ধ হলেই মুছে যাবে (session cookie)।


// path=/

// 👉 এটা বলে দিচ্ছে — cookie কোন path এ কাজ করবে।

//     / মানে পুরো ওয়েবসাইটে cookie ব্যবহার করা যাবে।

//     ধরো /shop দিলে → cookie শুধু example.com/shop এর ভেতরে কাজ করবে।







