"use strict";
/*
! SOME-MORE-OPERATORS
// ? Assignment =
// ? Comparision:
//  * > ,< ,>= ,<=
//  * == ,===
//  * !== , !===
// ? Logical:
//  * &&
//  * ||
//  * !
? Ternary ?
*/
//! Assignment =
let assigningValue = "assigned";
//! Comparision : < , <= , !== , ===
let no1 = 45;
let no2 = 44.5;
let no3 = 45;
let isGreater = (no1 > no2);
//* console.log("isGreater: " + isGreater);
let isLess = (no1 < no2);
//* console.log( "isLess: " + isLess);
let isGreaterEqual = (no1 >= no3);
//* console.log("isGreaterEqual: " + isGreaterEqual);
let EqEqEq = (no1 === no2);
//* console.log("EqEqEq: " + EqEqEq);
let notEqEqEq = (no1 !== no2);
//* console.log("notEqEqEq: " + notEqEqEq);
//! Logical : && , ||, ! 
//? Using comparision variables 
//* AND both should be tru to be true
let logicalAnd = (no1 === no3) && (no2 > no1); //false
//* one true
let logicalOR = (no1 === no3) || (no2 > no1); //true
//* Ulta
let logicalNot = !(no1 === no3); //false 
//* console.log( logicalAnd , logicalOR , logicalNot );
//! Ternary ?
let isAccess = true;
let employe = isAccess ? "Welcome" : "Sorry!";
console.log(employe);
