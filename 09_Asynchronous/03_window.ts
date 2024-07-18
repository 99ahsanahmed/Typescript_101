//01_setTimeout  
function practice(num1:number,num2:number){
    console.log(num1+num2);
}
setTimeout( practice, 2000, 5,6)//right way to pass argument





//02_setInterval
setInterval(()=>{
    console.log("yeh rukhta nahin hai!!!")
},1000)