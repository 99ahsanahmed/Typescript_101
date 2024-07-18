/* 
?Array indexOf()
?Array lastIndexOf()
// ?Array includes()
// ?Array find()
?Array findIndex()
?Array findLast()
?Array findLastIndex()
*/

//!                     Array find()
let arr:string[] = ["banana","mango","apple"];
let find = arr.find((value, index)=>{
    return value == "mango";
})
//*console.log(find);


//!                     Array includes()
//?Returns either true or false
let cars:string[] = ['BMW','COROLLA','HONDA','YAMAHA'];
//*console.log(cars.includes('BMW'));
//? ANS: true
 

//!                     Array includes()