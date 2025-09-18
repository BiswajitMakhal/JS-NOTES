
//------------- DOM কী?

// DOM এর full form হলো Document Object Model.

// 👉 এটা হলো একটা Programming Interface যেটা ওয়েবপেজ (HTML) কে object আকারে ব্রাউজারের ভেতরে উপস্থাপন করে।

// মানে, যখন তুমি একটা HTML পেজ লোড করো, ব্রাউজার ওই পেজটাকে DOM এ কনভার্ট করে, যাতে JavaScript দিয়ে তুমি সেই HTML element গুলো পড়তে, পরিবর্তন করতে, মুছতে বা নতুন element যোগ করতে পারো।




// 👉 ব্রাউজার এটাকে DOM আকারে এভাবে দেখে (tree structure):


//      <body>
//   <h1>Hello World</h1>
//   <p id="para">This is a paragraph.</p>
// </body >


// Document (root object)
//  └── html (object)
//      └── body (object)
//          ├── h1 (object) -> "Hello World"
//          └── p (object, id="para") -> "This is a paragraph."


//  প্রতিটি HTML element → object
//  প্রতিটি object → properties (like innerHTML, id) + methods (like appendChild(), removeChild()) থাকে







// DOM দিয়ে কী করা যায়?

// 1. HTML elements পড়া → document.getElementById("id")

// 2. HTML elements পরিবর্তন করা → .innerHTML, .style

// 3. নতুন element তৈরি করা → document.createElement("div")

// 4. element মুছে ফেলা → .remove()

// 5. CSS পরিবর্তন করা → element.style.color = "red"

// 6. Event handle করা → element.onclick = function() {...}