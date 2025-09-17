// ------------API:

// 🟢 API কী?

// API হলো একটা মধ্যবর্তী সেতু (bridge) যেটা দুটি সফটওয়্যার/অ্যাপ্লিকেশন/সার্ভিসকে একে অপরের সাথে কথা বলতে সাহায্য করে।



// 🟢 (Restaurant Example):

// ধরো তুমি রেস্টুরেন্টে গেছো।

// তুমি waiter-কে বলে দিলে "এক প্লেট ফ্রাইড রাইস চাই"।

// Waiter গিয়ে কিচেনে তোমার অর্ডারটা দেয়, রান্না হলে আবার সেটা তোমার কাছে এনে দেয়।

// এখানে:

// তুমি = Client (User / App)

// কিচেন = Server (Data Provider)

// Waiter = API (মধ্যবর্তী যেটা তথ্য আনা–নেওয়া করছে)



// বাস্তব জীবনের উদাহরণ:
// ফেসবুক লগিন ব্যবহার করে অন্য সাইটে লগিন করা

// Google Maps অন্য অ্যাপে embed করা

// মোবাইল ব্যাংকিং অ্যাপ থেকে টাকা পাঠানো




// ------------------FETCH:

// 🔹 fetch কী?

// JavaScript এ fetch() হলো একটা built-in function, যেটা দিয়ে তুমি server থেকে data আনতে বা পাঠাতে পারো (HTTP request)।
// এটা সবসময় একটা Promise return করে।


// 🔹 কেন ব্যবহার করা হয়?

// আগে আমরা XMLHttpRequest (XHR) ব্যবহার করতাম, কিন্তু ওটা অনেক জটিল ছিল।
// fetch অনেক সহজ, readable, আর আধুনিক।


fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())   // JSON এ convert করলাম , jokhoni fetch korbe tokhoni first .then-ar moddhe jei data ta thake take json-a convert korte hoi, karon oita read kora jai na stream akare thake//
    .then(data => console.log(data))     // data print
    .catch(error => console.error("Error:", error));
