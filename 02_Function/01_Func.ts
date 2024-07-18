//00_HOW MANY FUNCTIONS:
/*
  01_Function, 
  02_Arrow_Function ( var = func()=>{} ) 
  03_Anonymous_Function ( benam ) 
  04_Immediately Invoked Function Expression (IIFE)
  05_Recursive Function ( repear with if )
  06_Nested Function
*/

//00_HOW MANY PARAMETERS
/* 
parameter=bracket walay naam aur arg asal value hoti hai
  1.1_Default Parameter
  1.2_Rest Parameters
  1.3_Spread Operator
*/



//01_Basic Functions, Parameters, Default Parameters, Rest and Spread
function meraFunc(num1:number, num2:number):number{
    return num1 *num2;
}
meraFunc(3,4)



//1.1_Default_Parameters
/*
  Note:Default value set karne se argument pass karna zarori nahin rehta
*/
function meraFunc2(num1:number, num2:number=7):number{
    return num1 * num2;
}
meraFunc2(3)


//1.2_Rest Parameters #187
/*
   Note: Rest Parameter ki datatype humesha array main hota hai, We use it when we are not sure that how many inputs we are expecting
*/
function restLearn(aam:number = 1 , ...restt:number[]){
    console.log(aam);
    console.log(restt)
}
restLearn(3,5,6,4,8)


//1.3_Spread_Operator #189
function spreadLearn(aam:number = 1 , ...spreadd:number[]){
    console.log(aam);
    console.log(...spreadd)
}
spreadLearn(3,5,6,4,8)
/*
  Rest output = [ 5, 6, 4, 8 ]
  Spreadd ka output = 5 6 4 8
*/



//1.4_WHAT IF WE CALL FUNCTION TWICE
function callTwice(naam, kaam){
    console.log(`mera naam yeh ${naam} hai aur kaam yeh ${kaam} hai`)
}
callTwice("Ahsan","Coder");
callTwice("Babar"," Cricketer");
