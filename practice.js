// LESSER OR EQUAL THAN 4

let a = [20, 15, 5, 2, 3, 1, 4];
let b = [];

for (i = 0; i < a.length; i++) {
    if (a[i] <= 4) {
        b.push(a[i]);
    }
}
console.log(b);


// CHECK THE LEAP YEAR:

let year = 2020;
if (year % 4 === 0 || year % 400 === 0) {
    console.log(`${year} this year is a leapyear`);
}
else if (year % 100 === 0 && year % 400 !== 0) {
    console.log(year + "this year is not a leapyear");
}
else {
    console.log(`$(year) this is a not leapyear`);
};

// 1. Write a function that takes a string as input and returns the reverse of the string? 


function reverse() {
    let abcd = "abcd"
    let rev = "";
    for (i = 0; i < abcd.length; i++) {
        rev = abcd[i] + rev; //jehutu abcd-ar index no. ta aage likhechi(abcd[i]+rev) tai prottek bare index ta loop hoe aage bosbe //
    }
    console.log(rev);
}
reverse();

// 2. Write a JavaScript program to remove specified elements from the right of a given array of elements.? 

function remove() {
    let a = [1, 2, 3, 4, 5, 6];
    let b = [];
    for (i = 0; i < a.length; i++) {
        a.pop();
        b.push(a[i]); //a[0] = 1  [1,2,3,4,5],  a[1] = 2 [1,2,3,4], a[2] = 3 [1,2,3], a[3]= undefined(4 already remove hoe gache)
    }
    console.log(b);
}
remove();

// 3. Write a JavaScript function that reverses a number?

function numberRev() {
    let num = [3, 2, 2, 4, 3];
    let numRev = [];
    for (i = 0; i < num.length; i++) {
        numRev = num[i] + numRev;
    }
    console.log(numRev);
}
numberRev();

// 5. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'


function alpha() {
    let name = "biswajit";
    let order = name.split(""); //letter wise split kore array banai
    order.sort(); //sort holo akta ARRAY METHOD jetar dara amra array ke alphabetical order sajate pari
    order = order.join(""); //join holo akta ARRAY METHOD, jetar dara akta array-ar sob elements ke string-ar moddhe jora deoa jai
    console.log(order);
}
alpha();


// 6. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within
// the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5 

function vowel(str) {
    // let str = "the quick brow fox";
    let vowels = "aeiou";
    let count = "";
    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;

}

console.log(vowel("the quick brown fox"));


// 7. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and
// undefined.

function checktype(value) {
    return typeof value;
}
console.log(checktype(123));
console.log(checktype(""));
console.log(checktype());
console.log(checktype(true));
console.log(checktype(function () {

}));
console.log(checktype({ name: "biswajit" }));


// 9. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is 
// odd or even, and displays a message on the screen.
// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even" 


for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} even`);
    }
    else {
        console.log(`${i} odd`);
    }
}



// 14. Write a JavaScript conditional statement to find the largest of five numbers.
function largestNum(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
        console.log(`${a} is a largest number`);
    }
    else if (b > a && b > c && b > d && b > e) {
        console.log(`${b} is a largest number`);
    }
    else if (c > a && c > b && c > d && c > e) {
        console.log(`${c} is a largest number`);
    }
    else if (d > a && d > b && d > c && d > e) {
        console.log(`${d} is a largest number`);
    }
    else {
        console.log(`${e} is a largest number`);
    }
}
largestNum(10, 15, 20, 25, 30);


// 19. Write a JavaScript program to sort the items of an array. 
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]; 
// Sample Output : -4,-3,1,2,3,5,6,7,8 

function numSort() {
    let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
    arr1.sort(function (a, b) {
        return a - b; //accending order
    });
    console.log(arr1);
}

numSort();


// ----------REDUCE
// QUESTION----> let array =[1, 2, 2, 2, 3, 4, 5, 6, 7, 8]
// 1: 1,  2: 3,  3: 1,  4: 1,  5: 1,  6: 1,  7: 1,  8: 1 (OUTPUT WITH REDUCE).

let x = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8];

// type:1
let hello = (acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1; //ai line tai acc[curr] mane hoche accumulator-ar moddhe currenvalue key-er count store korar akta jaiga, (acc[curr]||0) mane hoche accumulator-ar moddhe jodi currvalue thake tahole seta bosbe nahole 0 bosbe, tarpore +1 hobe, bracket-ar pore +1 lekha jate oitar kaaj aage na hoi jeta bracket-a lekha seta aage hoi.//
    return acc;
};
let y = x.reduce(hello, {});
console.log(y);//output = current vlaue : count



// type:2
let xx = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8];

let yy = xx.reduce(function (acc, curr) {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(yy);










