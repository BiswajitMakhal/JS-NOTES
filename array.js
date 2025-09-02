//------------Array

//SADHARONOTO VARIABLE AKTA VALUE HOLD KORE, KINTU ARRAY TE MULTIPLE VALUE STORE KORE RAKHTE PARI, AITA HOLO AKTA LIST JEKHANE DATA GULO ORDER HISEBE THAKE.

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Mango"




//------------ARRAY CONCEPT
//--------REVERSE

let a = [1, 2, 3, 4, 5, 6];
let b = a.reverse(); //reverse hoe jabe//
console.log(b);

// -------SORT(SORT HOCHE ASCENDING OR DECENDING ORDER-A SAJATE PARE, SORT FUNCTION ACCEPT KORE, ABAR ALPHABETICAL ORDER-TE SAJATEO SAHAJJO KORE)
// Ex:1

let srt = ["apple", "cherry", "banana", "mango"];
srt = srt.sort();
console.log(srt);

// Ex:2

let srrt = [14, 40, 2, 6, 10, 25, 35];
srrt = srrt.sort(function (a, b) {  //( ) bracketer modhe jeta lekha setake compare function bole

    return a - b; //ascending order (a-b likhle ascending orderte sajate parbo)

});
console.log(srrt);

// EX:3

let srtt = [14, 40, 2, 6, 10, 25, 35];
srtt = srtt.sort(function (a, b) {

    return b - a;//descending order (b-a likhle descending orderte sajate parbo)

})
console.log(srtt);


// SORT, FOR EACH , MAP, REDUCE, FILTER --> SOBAI NIJER MODDHE FUNCTION ACCEPT KORE

// -----------MAP (MAP SUDHU TOKHONI USE KORTE HOI JOKHON AMADER NEW ARRAY BANATE HOI AAGER ARRAY-ER DATAR BASIS-A)
// EX:1
let maf = [12, 25, 13, 28, 32];
let newmaf = maf.map(function (val) {

    return 12; //return na korle undefined hoi//

});
console.log(newmaf);


// EX:2
let arr = [12, 20, 3, 5, 28, 40];
let newarr = arr.map(function (val) {
    if (val > 10)
        return val; //condition onujai jeta print hobar kotha seta print hobe//
});
console.log(newarr);


// ------------FILTER (FILTER HOLO JAVASCRIPT-ER AKTA ARRAY METHOD ,JETA ARRAY-ER ELEMENTS KE BECHE NIYE NEW ARRAY CREATE KORE,FILTER KONO ELEMENT-KE MUCHE FELENA BORONG CONDITION TRUE HOLE SUDHU SEI ELEMENT KE NEW ARRAY TE RAKHE)

let fil = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newfil = fil.filter(function (val) {
    if (val > 5) return true;
});
console.log(newfil);

// ------------REDUCE (REDUCE HOLO JAVASCRIPT-ER ARRAY METHOD,JETA ARRAY-ER SOB ELEMENTS KE AKSATHE AKTA SINGLE VALUE TE KOMIYE DEI. * SUM, PRODUCT, MAX, MIN OR ONNO KONO CUMULATIVE CALCULATION KORAR JONNO REDUCE USE KORA HOI.)

let red = [1, 2, 3, 4, 5, 6];
let newred = red.reduce(function (accumulator, current) {
    return accumulator + current; //accumulator holo reduce method-er first variable jeta array-er prottek element process korar somoy previous result joma rakhe. or current value hoche akhon je elements ta process hoche.//
}, 0); // akhane jehutu zero diechi tai accumulator first zero thakbe then current value ase add hote thakbe accumulator-a//
console.log(newred);


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







