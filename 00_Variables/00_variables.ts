/*
// ? 01_var
// ? 02_let 
// ? 03_cons
// ? 04_Inference
? 05_bigint
? 06_bigint
? 05_bigint
* Explicit - writing out the type:
* Implicit - TypeScript will "guess" the type, based on the assigned value
!🚀Javascript donot assign types to variables but because TS is strongly typed it assigns.
// ?🎯String
// ?🎯Number
// ?🎯Boolean
// ?🎯Any
*/

//! 01_var
//? Var is an old way to declare variables , changable
var car : string = "coroola";
//* console.log(car);



//! 02_let
//? let is new and better way to declare variables , changable
let id : number = 123806;
//* console.log(id);



//! 03_const
//? const holds constant values , not changable
const Mname : boolean = false;
//* Mname = true ; ⚠Cannot assign to 'Mname' because it is a constant⚠



//! 04_Inference
//? It is just like Javascript, Compiler guesses the type
let a = "Pakistan";
let b = 2432;
let c = false;

