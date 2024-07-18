//01  
//                    PassByValue 
//jo hai wo sirf value copy karta hai aur memory location alag alag hoti hai
//number,string,boolean,BigInt,
let num1 = 5;
let num2 = num1; //5
num2 = 6; //6

//02
//                   PassByReference 
//jo hai oski memory location same hoti hai
// {}[]()
let strIs = ["ahsan" , 67 ,"nike"]
let newStr = strIs ;
newStr[1]=90; //Changed in both as it is


//03
//                  Tackling this manually:
//by using SPEREAD
let strIsObj2 = [...strIs] ;
strIsObj2 [0] = "shaiq";
// console.log(strIsObj)//ye barqarar
// console.log(strIsObj2)// ye change


