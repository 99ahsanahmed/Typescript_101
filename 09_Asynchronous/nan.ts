
//01_SYNCHRONOUS
/*console.log(1);
console.log(3);
console.log(2);*/
//output: 1 3 2



//02_ASYNCHRONOUS
console.log(1);

setTimeout(
    ()=>{
        console.log(2);
    },1000);
console.log(3);
//OUTPUT: 1,3 pehle phir 2 1 second baad
//Agar SYNCHRONOUS hota toh pehle 2 hota print phr 3 likin kioke yeh ASYNCHRONOUS tha toh 1,3 hogaya phr 2 hoa.


