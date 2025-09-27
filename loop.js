//----------- FOR:

//  for loop pattern:
// for (start; end; change) {}

// Ex:

for (let i = 1; i < 101; i++) { // 1-100 projonto print hobe//
    console.log(i);
}

// start i-ar value 1, 1 101-ar theke small akbar print holo//
// then i++ ache mean 1plus hoe 2 hobe, i-ar value holo 2 ,abar 2 101-theke small tai abar print hobe, ai kore 100 projonto print hobe,//



//-----------WHILE:

//while loop pattern:
//                      start
//                      while (end) {
//                          //code//
//                          change
//                      }

//Ex:
let i = 1;
while (i < 51) { // 1-50 projonto loop hobe//
    console.log(i);
    i++;
}




// -------------DO-WHILE:

// do...while loop হলো এমন একটা লুপ যেটা অন্তত একবার চলবেই, কারণ এখানে condition পরে check হয়।

// do-while pattern:
//               do {
//               // যে কোড চলবে
//               } while (condition);

// কিভাবে কাজ করে:
// প্রথমে do { } এর ভিতরের কোড একবার execute হবে।
// তারপর while ( ) এর condition check হবে।
// যদি condition true হয়, তাহলে আবার কোড চলবে।
// যদি condition false হয়, তাহলে লুপ বন্ধ হয়ে যাবে।

// Ex:
let count = 10;
do {
    console.log(count);
    count++;
}
while (count < 2); //condition false holeu , do-ar moddhe jei code ta ache seta akbar print hobe//




//---------------- BREAK AND CONTINUE:

//break:
let a = 28;
for (let a = 0; a < 41; a++) {
    console.log(a);
    if (a === 31) {
        break; //break loop সম্পূর্ণভাবে বন্ধ করে দেয় যেখানেই এটি লেখা থাকে। jodi a-tar value 31 hoi tahole break hoe jabe mean theme jabe//
    }

}

//continue:
let b = 35;
for (let b = 0; b < 41; b++) {
    if (b === 31) {
        continue; //continue current iteration skip করে পরের iteration এ চলে যায়।  31-skip hoe jabe.
    }
    console.log(b);
}



// -------------------THEORY-QUESTIONS:

// ✔️1. Print numbers from 1 to 10 using a for loop. 
for (let d = 1; d <= 10; d++) {
    console.log(d);
}



// ✔️2. Print numbers from 10 to 1 using while loop.
let e = 10;
while (e > 0) {
    console.log(e); //while loop-a first code lekha hoi then change
    e--; //change
}


// ✔️3.Print even numbers from 1 to 20 using a for loop.

for (let s = 1; s < 21; s++) {
    if (s % 2 === 0) {
        console.log(s);
    }
}

// ✔️4.Print odd numbers from 1 to 15 using a while loop.

let v = 1;
while (v < 16) {
    if (v % 2 === 1) {
        console.log(v);
    }
    v++;
}

// ✔️5.Print the multiplication table of 5 (i.e., 5 × 1 = 5............5 × 10 = 50)

let x = 1




