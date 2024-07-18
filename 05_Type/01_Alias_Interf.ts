//! 01_ALIAS
//? For variables, 
type car = string;
//? Alias apki custom built data type hoti hai
//* car = 5768 error
let gaari: car = "corolla"

//? Apni values as data type
type trafficLight = "red" | "yellow" | "green"
let dhaSignal : trafficLight = "yellow";
let jauharSignal : trafficLight = "green";
let gulshanSignal : trafficLight = "red"



//! union
// ?Sirf ik type nahin hotien
type aeroplane = string | boolean;
let PIA : aeroplane = "passenger";
let boeng : aeroplane =  true ;



//! 02_ALIAS
// ?APKI APNI TYPES FOR OBJECTS (key : value pair)
type user = {
    name:string,
    age:number,
    id:number
}
let user1 : user = {
    name:"ahsan",
    age:78,
    id:4598
}
//* console.log(user1)



//! 03_ALSO 01_ALIAS
// ?for functions
type forFunc = (num1:number , num2:number)=> number;
const add : forFunc =  (num1, num2)=> num1 + num2 ;
let subtract : forFunc =  (num1, num2)=> num1 - num2 ;
//* console.log(add(7,8));
//* console.log(subtract(10,2));



//! 04_ALSO 01_ALIAS
//! INTERSECTION 
// ?MATLAB MILA DENA
type leftPocket = {
    mobile:string;
    knife:string;
}
type rightPocket = {
    code:number;
    isPen:boolean;
}
type pant = leftPocket & rightPocket;
let mySamaan : pant ={
    mobile : "samsong",
    knife : "butterfly",
    code: 3456,
    isPen:true,
};
//* console.log("intersected", mySamaan)  
