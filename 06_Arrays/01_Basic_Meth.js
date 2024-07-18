"use strict";
let arr_methods_1 = ["length", "toString()", "at()", "join( * )"];
let arr_methods_2 = ["pop(last-out-print)", "push(add-last)", "shift(0-remove)", "unshift(0-new)"];
let arr_methods_3 = ["delete(0-undefined)", "splice-add(addplace,rem)", ""];
let concat_2_3 = arr_methods_1.concat(arr_methods_2, arr_methods_3);
console.log(arr_methods_1);
console.log(`concated array do not change original array ${concat_2_3}`);
