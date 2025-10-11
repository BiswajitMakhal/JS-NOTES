//---------------OOP:
// OOP (Object-Oriented Programming) হলো এমন একটা প্রোগ্রামিং ধারণা
// যেখানে data (তথ্য) আর function (কাজ) —
// একসাথে object আকারে রাখা হয়।

// 🧠 OOP কী করে (What OOP Does):
// 👉 OOP (Object-Oriented Programming) তোমার কোডকে
// গোছানো (organized), পুনঃব্যবহারযোগ্য (reusable),
// এবং সহজভাবে maintain করা যায় এমন (maintainable) করে তোলে।
// ===============================================================================================================================================================================================================//
// EXAMPLE:
// BLUEPRINT/STRUCTURE (class/constructor function)
function createBiscuit(name, qnt, price, comp) {
  this.name = name; //this holo akta blank object jekhane name-ar value holo name variable(parameter)//
  this.quantity = qnt;
  this.price = price;
  this.company = comp;
}
// NEW OBJECTS (INSTANCE)
let cadbury = new createBiscuit("Oreo", 12, 10, "Cadbury");
let parleG = new createBiscuit("Sunfeast", 20, 40, "ParleG"); //jokhon new use kora hoi tokhon akta new empty object create hoi ,tokhon this-ar value hobe blank object,new na use korle this-ar value hoi window//
console.log(cadbury);
console.log(parleG);

// ⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️⤴️
// OOP (Object-Oriented Programming) আসলে একটা structure (ছাঁচ) বা design pattern দেয়
// যেখানে আমরা একটা blueprint (class বা constructor function) বানাই,
// যেটা বলে দেয় — “এই ধরনের object কেমন হবে, এর property আর method কী কী থাকবে।”
// তারপর আমরা সেই blueprint থেকে
// new keyword দিয়ে নতুন নতুন object তৈরি করতে পারি,
// যাদের value আলাদা হতে পারে।

// 1. Akhane createBiscuit function holo--> class/constructor function
// 2. Akhane cadbury or parleG holo---> instance
// Instance মানে —
// Constructor function (বা class) থেকে তৈরি হওয়া individual object।
// অর্থাৎ,
// new keyword ব্যবহার করে যখন তুমি constructor থেকে object তৈরি করো,
// তখন যে object তৈরি হয়, সেটা ওই constructor-এর instance।
// ===================================================================================================================================================================================================================//

// -------------------PROTOTYPE:
//“prototype হলো একটা memory, যেখান থেকে সব new object ওই memory share করে, এতে memory বাঁচে।”

// Prototype-এর মূল কাজ:
// “Prototype হচ্ছে একটা shared object যেখানে common methods রাখা হয়,
//  যাতে সব instance ওই method গুলো reference করে ব্যবহার করতে পারে, আলাদা কপি না বানিয়ে।”

// Ex1:
// WITHOUT PROTOTYPE :
function createPencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
  //প্রতিবার new createPencil() কল করলে write() function আলাদা কপি হয়ে তৈরি হয়।
  // মানে ১০টা pencil বানালে ১০টা আলাদা write() মেমোরিতে জায়গা নেবে ❌
  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.append(h1);
  };
}
let pencil1 = new createPencil("Natraj", 10, "black", "Natraj");
let pencil2 = new createPencil("Doms", 15, "red", "Doms");
pencil1.write("Hey, are you here"); //object-ar method-ar argument
pencil2.write("yes, I am here"); //object-ar method-ar argument
console.log(pencil1);
console.log(pencil2);

//Ex2:
//WITH PROTOTYPE:
function createPencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
  //akhane write method ta prototype-tai save kora holo, jekhan theke sob object sei memory ta nijer moddhe use korche//
  createPencil.prototype.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color; //akhane this.color--> mane holo new object mean instance-ar color
    document.body.append(h1);
  };
}
let pencil3 = new createPencil("Natraj", 10, "black", "Natraj");
let pencil4 = new createPencil("Doms", 15, "red", "Doms");
pencil3.write("Hey, are you here");
pencil4.write("yes, I am here");
console.log(pencil3);
console.log(pencil4);
// =======================================================================================================================================================================================================================//
// TimeStamp: (2:40:40)
//same jinish just aktu sajie lekhar jonno class or constructor use kori, akhane class-ar name ta first letter capital dite hobe//
//constructor holo jokhon amra kono new object create kori tokhoni ai constructor ta sobar aage chole (ex: new CreatePencil()  )
class CreatePencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  erase() {
    //erase--> aita object-er method
    document.body.querySelectorAll("h1").forEach((val) => {
      //akhane arrow function use korar reason holo arrow function nijer parent-ar kachh theke value nei, mean erase method//
      if (val.style.color === this.color) {
        val.remove();
      }
    });
  }
  write(text) {
    //akhaneo write--> akta object-ar method//
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}
let p1 = new CreatePencil("Natraj", "Natraj", 20, "red");
let p2 = new CreatePencil("Apsara", "apsara", 12, "blue");
p1.write("Natraj pencil, Rs:20 with red color");
p2.write("Apsara pencil, Rs:12 with blue color");
// p1.erase()---> korle p1 erase hoe jabe, simmilarly on p2//
