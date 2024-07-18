SIMPLE NOTES:
.
.
.
.
1) What is Synchoronous Javascript?
- >Synchoronous main 1 thread hoti hai.
- >Pehley TASK1 phr TASK2 phr TASK3;line by line kaam hoga.
- >GOOGLE:
As its base JavaScript language is synchronous. Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its
.
.
.
.
2) What is *Asynchoronous* Javascript?
- >Asynchoronous main multiple threads hotien hain.
- >Ik sath multiple TASKS perform karsakhtay hain. Ik sath ab TASKS bhi execute karsakhtay hain.
.
.
.
. 
3) CALL STACK:
- >*First* we write code
- >*It* goes to Call Stack
- >*Then* it gets executed
- >*Then* it outputs result in Browser Console
- >*At the end* it gets deleted from call stack   
.
.
.
.
4) Functions in *Call Stack*
- >Function only runs whenever it is invoked 
eg: func();
- >Then same as above i.e normal code
.
.
.
.
5) How to change Javascript's default behaviour and change it to ASYNCHRONOUS:
.
.
.
.
6) EXAMPLE:
*SYNCHRONOUS*
- >console.log(1);
console.log(3);
console.log(2);*/
- >output: 1 3 2



*02_ASYNCHRONOUS*
- >console.log(1);
setTimeout(
    ()=>{
        console.log(2);
    },1000);
console.log(3);
- >OUTPUT: 1,3 pehle phir 2 1 second baad
- >Agar SYNCHRONOUS hota toh pehle 2 hota print phr 3 likin kioke yeh ASYNCHRONOUS tha toh 1,3 hogaya phr 2 hoa.
.
.
.
.
7) WEBAPI:
- > WEBAPI is a actually a WEB thimg not of JAVASCRIPT.
- > (1)--settimeout(2)--(3):
   - > CALLSTACK (1) ko console main bhejega.
   - > PHR wo timeout wala lega osko chonkay foran execute nahin karna hoga islie woh osko WEBAPI main daldega
   - >CALLSTACK (3) ko print kareyga
   - >SETTIMEOUT wala code WEBAPI se CALLBACK_QUEUE
   (ASYNCHRONOUS walay codes ki line) main jaiga.
   - >EVENT_LOOP ghoom ghoom kar CALLBACK_QUEUE se code lega aur CALL_STACK main bhejdega.
   - > CALLSTACK execute karayga aur phr console.
