
// -------------Event : ওয়েবপেজে যখন কোনো অ্যাকশন ঘটে তাকে Event (ইভেন্ট) বলে।

// 👉 উদাহরণ:
// ব্যবহারকারী বোতামে ক্লিক করলো → click event
// মাউস কারসর কোনো জায়গায় নিলো → mouseover event
// কীবোর্ডে কোনো key চাপলো → keydown event
// পেজ লোড হলো → load event


// Event Handling কী?

// যখন কোনো Event ঘটে তখন কি কাজ হবে সেটা নির্ধারণ করার প্রক্রিয়াকে Event Handling বলে।

// 👉 উদাহরণ:
// তুমি চাইলে "Button-এ ক্লিক করলে একটা মেসেজ দেখাও" → এই কাজটা Event Handling।



// addEventListener:
// Ex1:
let singleClick = document.querySelector(".singleClick")

singleClick.addEventListener("click", () => { //akhane click event chalano holo //
    singleClick.style.color = "red"; //click event cholle , click korle red hobe 
})

// Ex:2
let h1 = document.getElementById("click");
let doubleClick = document.getElementById("Double");
doubleClick.addEventListener("dblclick", () => { //akhane double click Event chalano holo//
    h1.style.color = "blue";
})


// removeEventListener: (removeEventListener korar jonno function always aage likhte hoi tarpor sei function tar name removeEventListener-a function-ar jaigai likhe dite hoi)
let h2 = document.getElementById("reh2");
let button = document.getElementById("remove");

let removefunc = () => {
    h2.textContent = "Developer Biswajit Makhal"
}
button.addEventListener("click", removefunc);//akhane ami addEvent korlam //
button.removeEventListener("click", removefunc); //sei Event tai ami remove korlam to ar kaaj korbe na //



//-------------Common Events: click, input, change, submit, mouseover, keyup


// input: input event হলো এমন একটা ইভেন্ট যেটা ট্রিগার হয় যখন ইউজার কোনো form field (যেমন <input>, <textarea>) এর ভেতরে কিছু টাইপ করে বা চেঞ্জ করে।
let inp = document.querySelector("#text");
inp.addEventListener("input", (a) => { //addEventListener jokhoni chalabo tokhon parameter-a kichu likhle amra tar details pabo, jemon akhane amra console kore .data peyechi //
    console.log("typed", a.data); //browser-a console korle bojha jabe je , jeta input(type) kora hoche sei value ta parameter-a jache, ar sei parameter ke jokhon log kora hoche tar sathe .data add korle ki type korchi seta dekhte parbo// 
});






