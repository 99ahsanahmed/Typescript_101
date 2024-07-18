"use strict";
const persons = [
    { name: "osama", age: 22 },
    { name: "ali", age: 23 },
];
console.log('persons: ', persons);
const studetns = [
    { name: "ahmed", age: 21, isStudent: true },
    { name: "zohaib", age: 33, isStudent: true },
];
console.log('studetns: ', studetns);
// for loop
for (let i = 0; i < studetns.length; i++) {
    console.log(studetns[i].name);
}
// break early for loop
for (let i = 0; i < persons.length; i++) {
    // when this condition gets true it will break the loop immediately
    if (persons[i].name === "osama") {
        console.log(persons[i].name);
        break;
    }
    console.log(persons[i].name);
}
// callbacks
// a function receives another function as an argument
function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb(name);
}
function morningText(name) {
    console.log(`Good morning ${name}`);
}
greet("Zeyan", morningText);
