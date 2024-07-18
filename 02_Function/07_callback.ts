//07_CALLBACK FUNCTIONS
function naam(call:any){//call is a parameter of naam || Its type is function
    let name= "ahsan";
    let id=70537;//These two are call's parameter
    call(name, id)//CALLS's parameter is name
}
naam(//iske andar naam ka argument hai jo keh function ki soorat main hai.
    (name:string, id:number)=>{
        console.log("Hello, " + name + " ,his id is " + id);
    }
);
