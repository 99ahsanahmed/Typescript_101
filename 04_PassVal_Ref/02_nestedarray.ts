//04
//                    NESTED ARRAYS
let obg = {
    name:"ashan",
    age : 88,
    dabbayMaiDabba : ["ahsan" , "wasiq" , "yamman"]//NOTE: inner object spread nahin hoga
}
let obg2 = {...obg};
obg2.name = "james";
obg2.dabbayMaiDabba [1] = "don";
/*_____________________________________________________________________
NOTE: NAME aur AGE spread hojaiga likin DABBAY_MAIN_DABBA spread nahin hoga oske lie alag se lagana parayga spread operator ko

                   RESOLVING this issue
*/                   
let objj = {
    name:"lulu",
    age : 199,
    innerObj : ["ahsan" , "wasiq" , "yamman"]//
}
let obj2 = {...objj};
obj2.innerObj = [...objj.innerObj]
obj2.name = "james";
obj2.innerObj [1] = "don";
console.log(objj)
console.log(obj2)