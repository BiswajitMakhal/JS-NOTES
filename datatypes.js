// --------DATA TYPES ARE TWO TYPES 1.PRIMITIVE TYPES//
//                                  2.REFERENCE TYPES(NON-PRIMITIVE TYPES)//

//PRIMITIVE TYPES: AGULO KE JODI COPY KORA HOI TAHOLE REAL COPY PEYE JAOA JAI//
//EX:string, number(integer), boolean, null , undefined, symbol, bigint
// String: "Biswa",  'Biswa', `Biswa`

//INTEGER:12, 13.5, 14

//BOOLEAN: TRUE OR FALSE

//NULL: NULL MANE HOCHE JENE BUJHE OKHANE VALUE NA DEOA
// let studentName = null;

//UNDEFINED: EKTA VARIABLE BANIYE TAKE JODI VALUE NA DEAO HOI TAHOLE SETA JEI VALUE PAI SETA BY DEFAULT UNDEFINED HOI
// let a;

//SYMBOL:==>UNIQUE IMMUTABLE VALUE//
//       (FUTURE-A AMRA KONO LIBRARIES USE KORBO JEKHANE OR MODHE TAHKA KICHU FIELDS-ER MOTO SIMILAR AMRAO KONO FIELDS VUL BOSOTO TOIRI KORE DEBO, JAR JONNO
//       ORIGINAL LIBRARY TAR FIELDS CHANGE HOE JAI , SETA JATE NA HOI AMRA SYMBOL USE KORBO)
// let obj = {
//     uid: 1,
//     name: "Biswajit",
//     age: 12,
// };
// let u1 = Symbol("uid");
// obj[u1] = "001";

// BIGINT: CONSOLE A GIYE JODI AMRA BRACKET-ER MODDHE LEKHA (Number.MAX_SAFE_INTEGER) LIKHE ENTER MARI THEN AMRA AKTA NUMBER PABO OITAR CHEYE LARGE NUMBER NITE GALE AMRA BIGINT
//         DATATYPE USE KORI
// let a = 9007199254740991n; //n diye amra bigint use kori//
// a = a + 4n;



//NON-PRIMITVE TYPES: ADER COPY KORLE REAL COPY PAOA JAI NA KINTU TAR JAIGAI PARENT-ER REFERENCE PAOA JAI//
// EX: array, objects, function//
//      []       {}       ()
// let a = {
//     name: "Biswajit",
// };
// let b = a;
// b.name = "Makhal"//b-ar value change korle a-ar value change hoe jache//
// console.log(a);
// console.log(b);

//-------TRUTHY VS FALSY VALUES//

//0 ,false ,"" ,null , undefined, Nan, document.all ---->falsy values

//rest all ---->truthy values

//true er value 1
//false er value 0
//ex: true + false = 1
//    null + 1 = 1

// -------STRING + INTEGER KORLE Concatenation HOI, JOKHONI PLUS OPERATOR USE HOBE CONCATENATION HOBE
//        ONNO KONO OPERATORS SIGN USE KORLE CONCAT HOI NA
// let a = "5" + 1; //concat holo//
// console.log(a);
// let b = "5" - 1;//akhane hobe na//
// console.log(b);





