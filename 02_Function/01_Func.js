// 02_SLIDES_172-
//01_Basic Functions
// function meraFunc(num1:number, num2:number):number{
//     return num1 *num2;
// }
// meraFunc(3,4)
//02_Default_Parameters
//Note:Default value set karne se argument pass karna zarori nahin rehta
// function meraFunc2(num1:number, num2:number=7):number{
//     return num1 * num2;
// }
// meraFunc2(3)
//03_Rest_Parameters #187
//Note: Rest Parameter ki datatype humesha array main hota hai, We use it when we are not sure that how many inputs we are expecting
// function restLearn(aam:number = 1 , ...restt:number[]){
//     console.log(aam);
//     console.log(restt)
// }
// restLearn(3,5,6,4,8)
//04_Spread_Operator #189
// function spreadLearn(aam:number = 1 , ...spreadd:number[]){
//     console.log(aam);
//     console.log(...spreadd)
// }
// spreadLearn(3,5,6,4,8)
//Rest output = [ 5, 6, 4, 8 ]
//Spreadd ka output = 5 6 4 8
//WHAT IF WE CALL FUNCTION TWICE
function callTwice(naam, kaam) {
    console.log("mera naam yeh ".concat(naam, " hai aur kaam yeh ").concat(kaam, " hai"));
}
callTwice("Ahsan", "Coder");
callTwice("Babar", " Cricketer");
