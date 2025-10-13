//---------------OBJECT:
// 👉 Object হলো এমন একটা data structure যেখানে আমরা key-value pair আকারে data রাখি।
// মানে:
// প্রতিটি জিনিসের একটা “নাম” (key) আর একটা “মান” (value) থাকে।

let obj = {
  name: "Biswajit",
  surname: "Makhal",
  age: 26,
};

//JavaScript Object Access করার ২টা উপায় আছে:

//✅DOT NOTATION:
//সবচেয়ে সাধারণ পদ্ধতি।
let person = {
  name: "Rahul",
  age: 25,
};

console.log(person.name); // Output: Rahul
console.log(person.age); // Output: 25

//✅BRACKET NOTATION:
//যখন key কোনো variable বা string আকারে থাকে তখন ব্যবহার হয়।
let key = "age";

let personn = {
  name: "Rahul",
  age: 25,
};

console.log(personn["name"]); // Output: Rahul
console.log(personn[key]); // Output: 25

//----------------NESTING AND DEEP ACCESS:

//NESTING:
// ➡️ যখন একটা object-এর ভিতরে আরেকটা object থাকে,
// তখন সেটাকে বলে nested object।

let student = {
  name: "Biswajit",
  age: 27,
  address: {
    city: "Kolkata",
    pin: 700001,
    location: {
      area: "Salt Lake",
      block: "B",
    },
  },
};
console.log(student.address.location.area); //area--> bar korar jonno bar bar dhore ato boro line likhte hbe, akei Deep Access bole//

//OBJECT DESTRUCTURING:
let { area, block } = student.address.location; //bar bar dot na diye mean Deep Access na kore, variable baniye nite hoi, future-a aar Deep Access korte hobena//
console.log(area, block);

//--------------------LOOPING: FOR-IN , OBJECT.KEYS, OBJECT.ENTRIES

//✅FOR-IN:
// for...in হলো JavaScript-এর একটা loop,
// যেটা object-এর property (key) গুলোর উপর loop চালায়।

let USER = {
  name: "Sourav",
  age: 25,
  city: "Kolkata",
};

for (let key in USER) {
  console.log(key);
  console.log(`${key}: ${USER[key]}`);
}

//✅OBJECT.KEYS():
// এটা object-এর সব key গুলোকে একটি array আকারে return করে।

let user = {
  name: "Rahul",
  age: 25,
  city: "Kolkata",
};

let keys = Object.keys(user);
console.log(keys); //["name", "age", "city"]

//✅OBJECT.ENTRIES():
// এটা key এবং value দুটো একসাথে array of arrays আকারে দেয়।

let User = {
  name: "Rahul",
  age: 25,
  city: "Kolkata",
};

let entries = Object.entries(User);
console.log(entries);

//-----------------------COPYING OBJECTS: SPREAD, OBJECT.ASSIGN, DEEP CLONE

//✅SPREAD OPERATOR IN OBJECT: এটা দিয়ে আমরা একটা object-এর property অন্য object-এ copy বা merge করতে পারি।

let userId = {
  id: "Biswa1234",
  Role: "dev",
};

let copyUserId = { ...userId };
console.log(copyUserId); //এখন copyUserId এবং userId আলাদা object। একটাকে পরিবর্তন করলে অন্যটা বদলাবে না।

//✅OBJECT.ASSIGN():
// এটা দিয়ে আমরা একটা বা একাধিক object merge করতে পারি বা একটা object-এর property অন্য object-এ copy করতে পারি।

// BASIC SYNTAX:
// Object.assign(target, ...sources);

// target → যে object-এর মধ্যে property যোগ হবে
// sources → যেগুলোর property কপি হবে

//Ex-1:
let ID = { name: "Akash", age: 32 };
let copy = Object.assign({}, ID); //akta khali object nilam sekhane property add hobe,spread operator-ar moton
console.log(copy);

//Ex-2:
let obj1 = { name: "Biswa" };
let result = Object.assign({ role: "dev123" }, obj1); //new property add kora holo obj1-te//
console.log(result);

//Ex-3:
let a = { name: "Sourav", age: 20 };
let b = { age: 30, city: "Delhi" }; //a-er bhitore b-er property add kore deoa holo//
Object.assign(a, b);
console.log(a);

//✅DEEP CLONE:
//Spread Operator-er khetre jokhon nesting object thake, tokhon take puro puri copy kora jaina,
// puro puri copy korar jonno amader object take first string-a convert korte hobe, then normal form-te

// WITH SPREAD OPERATOR
let fruit = {
  apple: "red",
  banana: "yellow",
  grapes: {
    type1: "black grapes",
    type2: "green grapes",
  },
};

let copyFruit = { ...fruit }; //spread operator diye aager object-ta copy kore nilam akta new object-a
copyFruit.grapes.type2 = "red grapes"; //copy object-er bhitore type2-er value change korlam "red grapes"
console.log(copyFruit);
console.log(fruit); //copy-er sathe real object-taro value change hoe jabe, karon bhitorer nested object reference pass kore naki copy//

//WITH DEEP CLONE
let fruits = {
  apple: "red",
  banana: "yellow",
  grapes: {
    type1: "black grapes",
    type2: "green grapes",
  },
};
let copyFruits = JSON.parse(JSON.stringify(fruits)); //prothome object take string-a convert korte hobe, then parse mean normal form//
copyFruits.grapes.type2 = "red grapes";
console.log(copyFruits);
console.log(fruits); //sudhu copy-er value change hoeche

//--------------------OPTIONAL CHAINING AND COMPUTED PROPERTIES:

//✅OPTIONAL CHAINING:
// কোনো object-এর property বা nested property access করার সময় যদি মাঝে কোথাও undefined বা null থাকে,
//  তাহলে error না দিয়ে undefined return করবে।

//Ex:
// Normally
const crm = {
  name: "Rahul",
  address: {
    city: "Kolkata",
    pin: 700001,
  },
};
console.log(crm.address.city); //এটা ঠিকঠাক কাজ করবে।

//Ex:
// কিন্তু যদি address না থাকে, মানে —
const crm1 = { name: "Rahul" };
console.log(crm1.address.city); //// এখন error দেবে ❌
// TypeError: Cannot read properties of undefined (reading 'city')

//Ex:
// With optional chaining
console.log(crm1.address?.city); //এখানে address না থাকলে আর error দেবে না। শুধু undefined return করবে।

//✅COMPUTED PROPERTIES:
// Computed Property মানে হলো —
// object-এর key (property name) আমরা dynamic বা variable থেকে set করি।

const keyName = "city";
const cv = {
  name: "Rahul",
  [keyName]: "Kolkata", //এখানে [keyName] মানে হলো — keyName ভ্যারিয়েবলের value ("city") কে key হিসেবে বসাবে।
};
console.log(cv);
// { name: 'Rahul', city: 'Kolkata' }

//------------------------QUESTIONS:

//✔️1.Create an object for a student with name, age, and isEnrolled.

let student1 = {
  name: "Aniket",
  age: 25,
  isEnrolled: true,
};

//✔️2. Can an object key be a number or boolean? Try this.
//Ans: yes
const Example = {
  true: "yes",
  25: "answer",
};
console.log(Example[true]);
console.log(Example[25]);

//✔️3.Access the value of "first-name" from this object:
let done = {
  "first-name": "Akash",
};
// done.first-name---> dot diye kora jabe na jokhon key te (-) thakbe
done["first-name"];

//✔️4.Given a dynamic key let keyy = "age", how will you access user[key]?
let keyy = "age";
let x = {
  age: 26,
};
console.log(x[keyy]);

// ✔️5.From the object below , print the latitude:
let locations = {
  city: "Kolkata",
  coordinates: {
    lat: 23.2,
    lng: 77.4,
  },
};
console.log(locations.coordinates.lat);

// ✔️6.Destructure the city and lat from the location object above.
let { city } = locations;
let { lat } = locations.coordinates;
console.log(city, lat);

// ✔️7.Destructure the key "first-name" as a variable called firstName.
let you = {
  "first-name": "Aniket",
};

let { "first-name": firstName } = you;
console.log(firstName);

// ✔️8. Use for-in to log all keys in this object:
let course = {
  title: "JavaScript",
  duration: "2 months",
};
for (let key in course) {
  console.log(key);
}

//✔️9. Use object.entries() to print all key-value pairs as:
//title:JavaScript
//duration: 2 months
Object.entries(course).forEach(function (val) {
  console.log(val[0] + ":" + val[1]);
});

//✔️10. Rewrite this safely using optional chaining:
let profile = {};
console.log(profile?.name?.age);

//✔️11. Use a variable to dynamically assign a property.
let dyn = "role";
let object = {
  name: "Biswajit",
  [dyn]: "admin",
};
console.log(object);
