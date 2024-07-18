"use strict";
/*
?Array indexOf()
?Array lastIndexOf()
?Array includes()
?Array find()
?Array findIndex()
?Array findLast()
?Array findLastIndex()
*/
//!                             Array find()
let arr = ["banana", "mango", "apple"];
let find = arr.find((value, index) => {
    return value == "mango";
});
