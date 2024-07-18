/*
?For loop
?For in loop
?Foreach loop
?For of loop
?While loop
?Do-While loop
*/


//!                         FOR-LOOP
   for(let col=1; col<=5; col++){
    //*console.log("Ahsan Don");
}
//!                        BREAK && CONTINUE
for(let i=0; i<=5; i++){
    //*console.log(i);
    if(i === 2){
        break;
        //? break loop se bahar lejata hai.
        //? Continue skip kardeta hai
    }
}




//!                        FOR IN -LOOP
//?Object keh lie use hota hai yeh
let ob1:any = {
    std1:"shahid",
    age1:12,
    std2:"mike",
    age2:12,
}
for (let key in ob1){
    //* console.log(" keys: " + key);
    //* console.log(" values: " + ob1[key]);
}


//!                        FOR IN -LOOP
//?Array keh lie use hota hai yeh
let rollno:number[] = [12,432,567,213,5342];
for(let num of rollno){
    //* console.log(num);
}



//!                        FOR EACH -LOOP
//?Array ki existing value par actionperform karkeh output 
let rolls:number[] = [12,432,567,213,5342];
rolls.forEach((values,index)=>{
//*console.log(values + 1, index);
})



//!                        WHILE-LOOP