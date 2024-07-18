//05_RECURSIVE_FUNCTIONS
function countdown(counter:number){
    if(counter <= 0){
        console.log("DONE!")
        return; //return void
    }
    console.log(counter);
    countdown(counter - 1);
}
countdown(4)
// output 4 bar : 5,4,3,2,1 DONE!



//5.1_CREATE A RECURSIVE FUNCTION:
//THAT CALLS ITSELF TO SOLVE A PROBLEM
function factorial(n:number):number{
    if(n === 0 ){
        return 1;
    }
    return n * factorial( n-1 );
}
console.log(factorial(6));


//5.2_PRACTICE
function checkRec(n:number){
        if(n === 5 ){
            console.log("Hogai 5 bar print");
            return ;
        }
        console.log("Ahsan");
        return checkRec( n+1 );
    }
    console.log(checkRec(1));
    
