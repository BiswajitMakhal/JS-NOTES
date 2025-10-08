//---------------OOP:
// OOP (Object-Oriented Programming) হলো এমন একটা প্রোগ্রামিং ধারণা
// যেখানে data (তথ্য) আর function (কাজ) —
// একসাথে object আকারে রাখা হয়।

// 🧠 OOP কী করে (What OOP Does):
// 👉 OOP (Object-Oriented Programming) তোমার কোডকে
// গোছানো (organized), পুনঃব্যবহারযোগ্য (reusable),
// এবং সহজভাবে maintain করা যায় এমন (maintainable) করে তোলে।

// EXAMPLE:
// BLUEPRINT/STRUCTURE
function createBiscuit(name, qnt, price, comp) {
  this.name = name; //this holo akta blank object jekhane name-ar value holo name variable(parameter)//
  this.quantity = qnt;
  this.price = price;
  this.company = comp;
}
// NEW OBJECTS
let cadbury = new createBiscuit("Oreo", 12, 10, "Cadbury");
let parleG = new createBiscuit("Sunfeast", 20, 40, "ParleG");
console.log(cadbury);
console.log(parleG);

// ⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️
// OOP (Object-Oriented Programming) আসলে একটা structure (ছাঁচ) বা design pattern দেয়
// যেখানে আমরা একটা blueprint (class বা constructor function) বানাই,
// যেটা বলে দেয় — “এই ধরনের object কেমন হবে, এর property আর method কী কী থাকবে।”
// তারপর আমরা সেই blueprint থেকে
// new keyword দিয়ে নতুন নতুন object তৈরি করতে পারি,
// যাদের value আলাদা হতে পারে।
