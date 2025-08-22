// ------------FUNCTION

//FUNCTION HOLO REUSABLE CODE BLOCK SUDHU AKBAR FUNCTION LIKHE BARBAR FUNCTION CALL KORE AMRA CHALATE PARI

// FUNCTION DECLARATION (OR NAME FUNCTION OR FUNCTION STATEMENT)
function example() {
    console.log("The code runs when you call this function.");
}
example();
example();

//FUNCTION EXPRESSION
let example1 = function () {
    console.log("function with variable");
};
example1();

// FAT ARROW FUNCTION (ES6)
let example2 = () => {
    console.log("this is a Arrow Function");
}
example2();

// ------------PARAMETER(PARAMETER HOLO SEI JAIGA JEKHANE FUTURE VALUE MANE ARGUMENT JABE)

function example3(v1) { //v1 holo parameter//   (argument ta jabe parameter-a ar parameter-ar value holo v1 )
    console.log(`${v1} is boring`);
}
example3("HTML");//argument//
example3("CSS");//argument//
example3("JS");//argument//


function add(v1, v2) {
    console.log(v1 + v2);
};
add(11, 22);
add(20, 15);

// ------------DEFAULT PARAMETER (ARGUMENT NA THAKLE DEFAULT VALUE DEBO)

function example4(v1 = 0, v2 = 0) {
    console.log("This is a addition", v1 + v2);
};
example4();

// ------------REST PARAMETER (JOKHON ARGUMENT-A VALUE ONEK GULO THAKE TOKHON AI PARAMETER ... USE KORBO)

function example5(...val) {
    console.log(val);
};
example5(1, 2, 3, 4, 5, 6, 7, 8);


function example6(v1, v2, ...val) {
    console.log(v1, v2, val);
}
example6(1, 2, 3, 4, 5, 6, 7, 8, 9,);

// -----------RETURN (RETURN KORLE FUNCTION AKTA VALUE FEROT DEI JETA AMRA VARIABLE-A RAKHTE PARI ABAR ONNO KOTHAO BABOHAR KORTE PARI)

function example7(a) {
    return 26 + a;
}

let a = example7(12);
console.log(a);




