//00_SCOPE, GLOBAL & LOCAL VARIABLE, HOISTING

// 01_LOCAL AND GLOBAL VARIABLES:
let globalVar:string = "Main har jagah use hosakhta hoon";
let local = () => {
    let localVar:string = "Main sirf andar use honga";
    console.log(globalVar);//CAN BE ACCESSED HERE
}
console.log(globalVar);
//console.log(localVar); //ERROR


//02_HOISTING

//2.1_WITH_VAR
//console.log(number) 
undefined
var number = 10
console.log(number)
/* 10
but IN LET AND CONST IT WILL GIVE:
 ReferenceError: Cannot access 'number' before initialization"
*/