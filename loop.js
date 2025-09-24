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