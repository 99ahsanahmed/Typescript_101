//01_ANONYMOUS_FUNCTION
// let beNaam = function(){
//     console.log("Mera naam kiya hhai, kuch bhi nahin hai")
// }
// beNaam()


//02_Immediately Invoked Function Expression (IIFE)
// (function(name){
//     console.log(`Foran Chalayga aur parameter ${name}`)
// })("ahsan");


//03_RECURSIVE_FUNCTIONS
// function countdown(counter:number){
//     if(counter <= 0){
//         console.log("DONE!")
//         return;
//     }
//     console.log(counter);
//     countdown(counter - 1);
// }
// countdown(4)
//output 4 bar

//CREATE A RECURSIVE FUNCTION:
//THAT CALLS ITSELF TO SOLVE A PROBLEM
// function factorial(n:number):number{
//     if(n === 0 ){
//         return 1;
//     }
//     return n * factorial( n-1 );
// }
// console.log(factorial(6));
// function checkRec(n) {
//     if (n === 5) {
//         console.log("Hogai 5 bar print");
//         return;
//     }
//     console.log("Ahsan");
//     return checkRec(n + 1);
// }
// console.log(checkRec(1));
