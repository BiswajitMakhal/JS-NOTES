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
//akhane jodi Method-ar bhitore arakta ES5 function use kori ar tar moddhe this use kori taholeu se nijer value loose korbe tai bhitorer function take ES6 rakhte hobe//
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
let val = new Abcd(); //val hoche Abcd class-ar akta instance
