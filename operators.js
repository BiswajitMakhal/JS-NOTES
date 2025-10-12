//-------ARITHMETIC://

//    +, -, /, *, %, **

//+ => ADDITION AND CONCATENATION
//- => SUBTRACTION, / => DEVIDE, % => (MODULUS) REMAINDER
// ** => EXPONENTIATION (2 ** 3 = 8)

//--------COMPARISON://

//   =
//   == (NOT STRICT COMPARISON)
//   === (STRICT COMPARISON)
//   !=  (NOT STRICT COMPARISON)
//   !== (STRICT COMPARISON)
//   >= (GREATER THAN EQUAL)
//   <= (LESS THAN EQUAL)
//   <
//   >

//  =  VALUE DEOA
//  ==  VALUE EQUAL ACHE KINA DEKHE, TYPE CHECK KORE NA

let a = 12 == "12";
console.log(a);

// ===  TYPE CHECK KORE DEKHE JE SAME ACHE KINA
let b = 12 === "12";
console.log(b);

// !=  NOT EQUAL (DOUBLE EQUAL-TE JETA HOI SETA ULTO HOE JAI JOKHON VALUE EQUAL THAKE TOKHON FALSE HOI , AR JOKHON VALUE DIFFERENT THAKE TOKHON TRUE)
let c = 12 != "18"; //output true//
console.log(c);

//  !==  NOT EQUAL EQUAL (TRIPLE EQUAL-TE JETA HOI SETA ULTO HOE JAI ,ATEO NOT EQUAL-ER MOTO SAME KAJ KORE KINTU ATE TYPE CHECK HOI  )

//---------ASSIGNMENT OPERATOR://

let a = 12;
a += 2; //ai line tar mane hoche a-tar aager value te 2 addition kore abar a-tate save kora//
console.log(a);
a *= 3; //ager line add kore 14 hochilo tai tar sathe 3 multiply kore abar a-er moddhe save korche//
console.log(a);

//---------LOGICAL://

//    &&, ||, !

//  && => (AND OPERATOR) AR MANE HOCHE DUTO JODI CONDITION THAKE AR TAR MODHE JODI DUTOI TRUE HOI THEN OUTPUT TRUE HOBE

//EX: TRUE && TRUE => TRUE
//    TRUE && FALSE => FALSE
//    FALSE && TRUE => FALSE
//    FALSE && FALSE => FALSE

//  || => (OR OPERATOR) AR MANE HOCHE DUTO CONDITION-AR MODHE JODI JE KONO AKTA TRUE THAKE THEN OUTPUT TRUE HOBE

//EX:  TRUE || FALSE => TRUE

//  !  => (NOT) NOT JODI KICHUR AAGE LAGANO HOI THEN TRUE HOLE FALSE HOBE AR FALSE HOI THEN TURE HOBE, ULTO HOE JAI

//EX:  TRUE => FALSE (12>!50 =>TRUE)

//--------UNARY OPERATOR://

//      +, -, !, typeof, ++, --

// + => jodi string ta number-a convert kora jai then tar aage + lagiye dile number hoe jabe(Ex: +"5")

//typeof => kono kichur aage jodi amra typeof lagie dei then setar type jana jabe (Ex: tyepof "string")

// ++ => jodi plus plus aage likhi then seta pre-increment and pore likhle post-increment //
//       jodi pre-increment hoi then seta aage add hobe then print hobe or post-increment-ar khetre aage print hobe same value then jodi abar kokhono print kori tokhon add hobe

// -- => akhaneo same pre-decrement and post-decrement//
let a = 12;
a = ++a + 5; //pre-increment//
console.log(a);

let b = 12;
b = b++ + 5; //post-increment//
console.log(b); //first time same value print//

//---------TERNARY OPERATOR://
// ?, :

// Ternary Operator হলো if...else স্টেটমেন্টের shortcut version।
// এটা দিয়ে তুমি এক লাইনে condition check করতে পারো।

//Syntax:
//  12 > 13 ? console.log(true) : console.log(false);

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
