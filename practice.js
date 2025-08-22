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


