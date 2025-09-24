
//------------- DOM কী?

// const { createElement } = require("react");

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



let h = document.getElementById("dom"); //kono element ke id diye connect koranor jonno amra aita use kori//
console.dir(h); //h1 print na hoe jate aita opening format-a chole ase tar jonno dir use korbo ate sob technical properties behind the scene ja thake sob bojha jai//


let multiple = document.getElementsByClassName("m"); //multiple classes ke select korar jonno aita use hoi, aita onekta array-r moton structure provide kore//


let query = document.querySelector("h1"); //jekono aktai element ke select kora jai , jei h1 ta sobar first-a thakbe setai select hobe//
console.dir(query);


let queryAll = document.querySelectorAll("h1"); //Multiple elements ke select kora jai , aitao onekta array-r moton structure provide kore//
console.dir(queryAll);


// --------------Text or Content Access : innerText, textContent, innerHTML

// innerText or textContent : same kaaj text change kore , textContent: faster ar jegulo visible na setao change korte pare, innerText: slower, ar visible jeta setai change korte pare//
//innerHTML : text change kore na html dei bhitore//


let HtmlChange = document.querySelector("#dom");
console.dir(HtmlChange); //dir diye console korle bojha jai je kon properties-ar value change korte hobe//
HtmlChange.innerHTML = "<u> Now I am change </>" //innerHTML diye bhitorer html change kora jai//


let TextChange = document.getElementById("yo");
TextChange.innerText = "Now my content also change"// akhane innerText or textContent dile same result asto //



// ---------------Attribute Manipulation: getAttribute, setAttribute, removeAttribute


// setAttribute():👉 কোনো element-এর attribute add বা update করতে ব্যবহার হয়।

let a = document.querySelector("a");
a.setAttribute("href", "https://google.com") //first value ta attribute name or second ta tar value

a.href = "https://google.com" //aivabeu value change kora jai , jemon textContent diye kora hochilo//



// getAttribute(): 👉 কোনো element-এর attribute এর মান (value) বের করতে ব্যবহার হয়।

let h1 = document.querySelector("#dom");
h1 = h1.getAttribute("id"); //jei attribute name ta akhane likhbo tar value chole asbe, jemon akahne "id"-ar value dom//
console.log(h1);


// removeAttribute(): 👉 কোনো attribute পুরোপুরি মুছে দিতে ব্যবহার হয়।

let img = document.querySelector("img");
img.removeAttribute("src"); //aita diye jei attribute ta likhbo seta remove hoe jabe//
console.log(img);




// ------------Dynamic Dom Manipulation : createElement , appendChild , removeChild, prepend


// createElement : 👉 নতুন একটা HTML element তৈরি করে (কিন্তু পেজে সাথে সাথে দেখায় না, শুধু তৈরি হয়)।

// appendChild : 👉 কোনো element-এর ভিতরে নতুন child element শেষে যোগ করতে ব্যবহার হয়।

// removeChild : 👉 কোনো parent element থেকে child element মুছে ফেলতে ব্যবহার হয়।

// prepend : 👉 appendChild() এর মতোই, কিন্তু নতুন element সবার আগে (শুরুতে) যোগ করে।

// appendChild or removeChild : aitake amra --> appendChild() , removeChild() or sudhu arokomo likhte pari --> append() , remove() //

let container = document.getElementById("container");//id diye akta div select korlam (variable banalam) //
let newElement = document.createElement("p");//akta p tag create korlam//
newElement.textContent = "I am a p tag" //p-tag tai text content add korlam
container.prepend(newElement); //container-ar bhitore newElement variable add korlam//

let outp = document.getElementById("out");
container.append(outp); //container-ar bhitore last-a P-tag add korlam//
let deleted = document.querySelector(".delete");
container.removeChild(deleted);//container variable-ar bhitore delete class bole akta element chilo seta delete kora holo//





// ------------Style updates via .style or classList (add, remove, toggle) ---->js diye CSS change kora

// .style
let h2 = document.getElementById("h2");
h2.style.color = "red";
h2.style.backgroundColor = "black"
h2.style.fontFamily = "Cursive";
h2.style.textTransform = "uppercase"

// classList(recomended structure)--> add, remove, toggle

let color = document.getElementById("title");
color.classList.add("colorfull"); //element-a class add kore//
color.classList.remove("removeMe");//element-a class remove kore//
color.classList.toggle("reverse"); //toggle: কোনো class থাকলে মুছে ফেলে, না থাকলে যোগ করে। এটা বেশিরভাগ সময় button click বা toggle menu-তে ব্যবহার হয়।



// --------------Theory Questions:

//✔️ Q1. Name the types of Node in the DOM tree.

//  DOM Tree-এর নোডের ধরন (Types of Nodes)

// 1. Document Node (ডকুমেন্ট নোড)
//    👉 এটি পুরো HTML ডকুমেন্টকে রিপ্রেজেন্ট করে।
//    উদাহরণ: document object।

// 2. Element Node (এলিমেন্ট নোড)
//     👉 প্রতিটি HTML ট্যাগ একটি element node।
//     উদাহরণ: <html>, <body>, <h1>, <p> ইত্যাদি।

// 3. Attribute Node (অ্যাট্রিবিউট নোড)
//    👉 প্রতিটি element-এর property বা attribute।
//    উদাহরণ: <h1 id="title"> → এখানে id="title" হলো attribute node।

// 4. Text Node (টেক্সট নোড)
//    👉 HTML element-এর ভেতরের টেক্সট।
//    উদাহরণ: <h1>Hello</h1> → "Hello" হলো text node।

// 5. Comment Node (কমেন্ট নোড)
//    👉 HTML কমেন্টও DOM-এর অংশ।
//    উদাহরণ: <!-- This is a comment -->

// 6. DocumentType Node (ডকুমেন্টটাইপ নোড)
//    👉 ডকুমেন্টের টাইপ বোঝায় (যেমন DOCTYPE declaration)।
//    উদাহরণ: <!DOCTYPE html></h1>



//✔️ Q2. What's the difference between an element node or text node?

//      element node : HTML tag , child node থাকে ।
//      text node : ট্যাগের ভেতরের লেখা, শুধু plain text, কোনো attribute বা child node থাকে না।




//✔️ Q3. What's the difference between getElementById or querySelector?

//        getElementById : শুধু id দিয়ে element খোঁজে।
//        querySelector:  tag, id, class – সবকিছু দিয়ে খুঁজতে পারে। tag diye khujle sobar first jeta thake seta return kore//



//✔️ Q4. What does getElementsByClassName return? Is it an array?

//        getElementsByClassName("className") একটা Array না, বরং এটা HTMLCollection রিটার্ন করে।

//         HTMLCollection কী?

//         দেখতে অনেকটা array-এর মতো (কারণ index দিয়ে element পাওয়া যায়: [0], [1], ...)

//         কিন্তু এটা pure array নয়।

//         এজন্য forEach, map, filter এর মতো array method সরাসরি কাজ করবে না।

//         তবে for loop বা for...of দিয়ে লুপ করা যায়।



//✔️ Q5. Select all <li> elements and print their text using a loop.

// Ans1:
let list = document.querySelectorAll("li");
list.forEach((val) => {
    console.log(val.innerText);
})

// Ans:2
let list2 = document.querySelectorAll("li");
for (let i = 0; i < list2.length; i++) {
    console.log(list2[i].textContent);
}



//✔️ Q6. How do you get the src of an image using javascript?

// Ans1:
let image = document.getElementById("pic");
console.log(image.src);

// Ans2:
let image2 = document.getElementById("pic");
console.log(image2.getAttribute("src")); //getAttribute diye jei attribute ta likhbo tar value chole asbe//
















