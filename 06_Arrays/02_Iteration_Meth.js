"use strict";
/*
?Array forEach
// ?Array map()
?Array flatMap()
// ?Array filter()
?Array reduce()
?Array reduceRight()
?Array every()
?Array some()
?Array from()
?Array keys()
?Array entries()
?Array with()
?Array Spread (...)
*/
//!                          Array map()
let arr1 = [1, 2, 3, 4, 5];
let mpFunc = arr1.map((currentVal) => currentVal * 2);
//* console.log(`Oroginal Array : ${arr1}`);
//* console.log(`Map function Array Array : `, mpFunc );
//!                            Array Filter()
//?It Literraly just filters out, Greater than example:
let greater = [2, 4, 6, 85, 46, 8];
let greaterNumbers = greater.filter((value) => {
    return value > 10;
});
//* console.log(greaterNumbers);
//!                          Array Reduce()
let numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce((totall, value) => {
    return value;
});
console.log(sum);
