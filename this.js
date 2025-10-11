//--------------THIS SPECIAL KEYWORD:
// JavaScript-এ this হলো special keyword, যা নির্দেশ করে “current context” বা “যার মধ্যে code চলছে সেই object”।
// this = “এখন যে object-এর মধ্যে code চলছে, সেই object”

// this কী?
// this হলো JavaScript-এর special keyword।
// অন্য keywords এর মতো নয়, যেগুলোর মান সব জায়গায় একই থাকে।
// this এর মান পরিস্থিতির উপর নির্ভর করে পরিবর্তিত হয়।
// মানে — যেখানে তুমি this use করছো, সেই context নির্ধারণ করে এর value কে দেখাবে।

//------- Global Scope:
console.log(this); //Global scope-ar bhitore this holo window (Browser-a)

//----------Under the function:
function abcd() {
  console.log(this); //function-ar bhitore this holo window (Browser-a)
}
abcd();

//-----------Under the Method:
// Ex:1
let person = {
  name: "Biswajit",
  age: 26,
  //akta amon function jeta object-ar bhitore thake take method bole , akhane greet holo akta object-ar method//
  greet: function () {
    console.log(`Hi, I am ${this.name}`); //method-ar moddhe this-ar value object hoe jai,ar akhane this hoche puro object(person)ta//
  },
};
//   akhane jodi ES6 function use kori mean arrow function tahole this nijer value loose kore window hoe jabe, tai ES5 function use korte hobe//
person.greet(); // Hi, I am Biswajit

// Ex:2
//akhane jodi object-ar Method-ar bhitore arakta ES5 function use kori, ar tar moddhe this use kori taholeu se nijer value loose korbe, tai bhitorer function take ES6 rakhte hobe
//Es6 arrow function always tar parent-ar theke this-ar value nei
let person1 = {
  name: "Biswajit",
  age: 26,
  greet: function () {
    let arrow = () => {
      console.log(this); //arrow function jehutu use korechi tai akhane this object hocche//
    };
    arrow();
  },
};
person1.greet();

//----------- Under the EventListener:
// arrow function-a this kaaj korena oi karone normal function use korte hoi
document.querySelector("h1").addEventListener("click", function () {
  console.log((this.style.color = "red")); //addEventListener jar opor lagano hoi seta holo this, akhane this holo h1//
});

//---------- Under the Class:
class Abcd {
  constructor() {
    console.log("hey, there");
    this.age = 26; //jekhane jekhane this likhbo sekhane akta empty object set hoe hobe , akhane jemon empty object-ar vitore age-ar value 26 set hoeche {age:26}//
  }
}
let val = new Abcd(); //val hoche Abcd class-ar akta instance, akhane new--> akta empty object create korche ar ai empty object tai holo this-ar value, aar sei empty object-er property hobe (age:26)//

// this-ar value ki sort-a jodi boli:
// 1. global scope -> window
// 2. function -> window
// 3. method with es5 function -> object
// 4. method with es6 arrow function -> window
// 5. es5 function inside es5 method -> window
// 6. arrow function inside es5 method -> object
// 7. event handler-> element
// 8. class -> blank object

// -------------CALL , APPLY AND BIND

//✅ CALL: (function ke call korar somoi amra set korte parbo je this-ar value ki hobe)

let obj = {
  name: "Biswjait",
  age: 26,
};

function abc() {
  console.log(this);
}
abc.call(obj); //akhane function.call() korar por call-ar moddhe jei value ta debo seta this hoe jabe, akhon this ar value obj-bole object hobe //

//Ex:
let objec = {
  name: "Biswajit",
  age: 26,
};

function cba(a, b, c) {
  console.log(this, a, b, c); //akhane this ta holo object(objec), ar a,b,c holo parameter, argument-ar moddhe jei value ta debo seta oi parameter-a dhuke print hobe//
}
cba.call(objec, 15, 12, 13);

//✅APPLY: (apply arguments array আকারে নেয়, first-ar ta this-ar value and then array-ar moddhe function tar multiple argument, mane holo --> this value, [arguments array])

let ob = {
  user: "TheBeast",
  game: "BattleRoyal",
};

function zzz(a, b, c) {
  console.log(this, a, b, c);
}
zzz.apply(ob, [12, 20, 40]); //hiseb moton akhane duto argument gache akta this value ar akta arguments array//

// ✅BIND:
// bind() হলো function method
// এটি একটি নতুন function return করে
// নতুন function-এর জন্য this permanently set করা যায়
// .call() বা .apply() থেকে আলাদা কারণ bind() নতুন function তৈরি করে, this ফিক্সড রাখে

let persons = {
  user1: "Biswajit",
  user2: "Sourav",
};

function xxx(a, b, c) {
  console.log(this, a, b, c);
}

let fnc = xxx.bind(persons, 40, 50, 60); //akhane this permanently fix hoe gache, bind use korle function-ar copy create kore
fnc(); //akhane function take call kora holo
// bind() দিয়ে তৈরি করা copy মূল function থেকে আলাদা, তাই মূল function পরিবর্তন করলে copy-তে কোনো প্রভাব পড়ে না, এবং copy পরিবর্তন করলে মূল function-এ কোনো প্রভাব পড়ে না।
