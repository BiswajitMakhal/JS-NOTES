
// ------------------ Local Storage কী?

// Local Storage হলো browser-এর একটা built-in storage system যেখানে তুমি data user-এর browser-এ স্থায়ীভাবে (permanent) সংরক্ষণ করতে পারো।

// 👉 মানে:

// তুমি যদি কোনো data Local Storage এ রাখো → সেটা browser বন্ধ করলেও মুছে যাবে না।

// Data থাকবে যতক্ষণ না user সেটা clear করে বা তুমি কোড দিয়ে remove করো।




// localStorage only for Browser//
localStorage.setItem("UserName", "Biswajit"); //data store korar jonno aita use hoi, akhane Biswajit hoche value ar UserName hoche ki name-a save korte chai//

console.log(localStorage.getItem("UserName")); //getItem: এটা storage-এর ভেতরে যে key(UserName) দিয়ে তুমি data save করেছো, সেই key দিয়ে value বের করে আনে।

localStorage.removeItem("UserName");  //Remove Item (delete specific key)

localStorage.setItem("UserName", "Makhal"); //update korar jonno same amra setItem use kori ,jodi key na thake new key banai or jodi key thake tahole update kore//

console.log(localStorage.length); //Length (কতগুলো key আছে) already browser-a show kore length












// ----------------  Session Storage কী?

// Session Storage হলো browser এর temporary storage system।

// 👉 মানে:

// Data শুধু একটা tab/session এর জন্য থাকে।

// তুমি tab বা browser বন্ধ করলে data মুছে যায়।

// ব্যবহার হয় অস্থায়ী (temporary) data রাখার জন্য।





//------------------------   Cookies কী?

// Cookies হলো ছোট ছোট data যেগুলো browser user-এর machine এ save করে এবং server এ পাঠায় প্রতিবার request করার সময়।

// 👉 মানে:

// মূলত server ↔ client communication এর জন্য ব্যবহার হয়।

// সাধারণত login info, tracking data, preferences রাখে।

// Data সাধারণত 4KB সীমার মধ্যে হয়।

// Cookies এর expiry date থাকতে পারে (যেমন 7 দিন পর মুছে যাবে)।




