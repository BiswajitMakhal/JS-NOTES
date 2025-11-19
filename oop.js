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
  //constructor-ar baire jaa method likhte chai likhbo
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

//-------------------EXTENDS AND SUPER:

//EXTENDS:👉 extends মানে হলো "inherit করা"।
// মানে —
// একটা class (child class) অন্য একটা class (parent class)-এর property এবং method গুলোকে নিজের মধ্যে নিয়ে নেয়।

//SUPER:👉 super মানে হলো parent class-এর constructor বা method কে ডাকা।
// যখন কোনো child class তার নিজের constructor তৈরি করে, তখন তাকে parent class-এর constructor-ও চালাতে হয় —
// আর সেটা করার জন্য super() ব্যবহার করা হয়।

//User class
class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }
  //jokhoni ai method take call kora hobe o bole debe ki role, user naki admin(Ex: a1.checkRole()--->you are admin//
  checkRole() {
    console.log(`you are ${this.role}`);
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.append(h1);
  }
}
//Admin class
//akhane extends user mane holo Admin class oi sob rakhbe jeta User class-a ache
class Admin extends User {
  //parent-ar constructor ke call korar jonno super use kora holo
  //constructor-ar moddhe sudhu Admin-ar parameter gulo likhbo
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin"; //arpore jei jinish gulo sudhu Admin-a rakhte chai seta likhbo
  }

  remove() {
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.remove();
    });
  }
}

let u1 = new User(
  "Biswajit",
  "Behala",
  "oop123",
  "biswjait_makhal@outlook.com"
);
let u2 = new User("Sourav", "Kolkata", "sourav_naskar@gmail.com");
u1.write("hey");
u2.write("hey");

//Create New Admin
let a1 = new Admin("admin", "India", "admin123", "admin@gmail.com"); //new Admin create kora holo

// ----------------------PROTOYPAL INHERITANCE VS CLASSICAL INHERITANCE

//CLASSICAL INHERITANCE : classes baniye oder extend kore deoa

//PROTOTYPAL INHERITANCE:
//jekono programing language-a inheritance-er mane holo class diye class inherit kora,kintu javascript-te prothome class chiloina,
//to akhane ki hoto je object object diye inherit korto//

//Prototypal inheritance Example:
// মানে, তুমি যদি একবার কোনো object বা class-এ property/method তৈরি করো,
// তাহলে অন্য object সেইগুলোকেও ব্যবহার করতে পারবে —
// যেন “বাবার থেকে ছেলেতে গুণ উত্তরাধিকার” পাচ্ছে
//Ex-1:
// Parent object
const parent = {
  greet: function () {
    console.log("Hello from parent!");
  },
};

// Child object that inherits from parent
const child = Object.create(parent); //এখানে Object.create(parent) মানে হচ্ছে — child object তৈরি হয়েছে যেটা parent-এর সব property/method পাবে prototype chain মারফত।

child.greet(); // Output: Hello from parent! //ami chaile upore greet ta akhaneu call korte parbo//

//Ex-2:
//Parent object
let coffee = {
  color: "dark",
  drink: function () {
    console.log("ta ta ta ta ta ");
  },
};
//Child Object
let nessCaffe = Object.create(coffee); //( )---> ar moddhe object-ar name ta dite hobe//
nessCaffe.tase = "Sweet";
nessCaffe.drink();

//akhane akta question aste pare je amra chaile akhane nicher tao to korte partam,
let a = {};
let b = { ...a };
//kintu ate akta problem ache aita a-er puro hard copy create hoche b-er moddhe, aar amra jodi kono shared memory chai tahole , nicher motoni korte hobe,
let c = {};
let d = Object.create(c);
