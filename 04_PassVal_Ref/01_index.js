//01  
//                    PassByValue 
//jo hai wo sirf value copy karta hai aur memory location alag alag hoti hai
//number,string,boolean,BigInt,
// let num1 = 5;
// let num2 = num1; //5
// num2 = 6; //6
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//02
//                   PassByReference 
//jo hai oski memory location same hoti hai
// {}[]()
var strIsObj = ["ahsan", 67, "nike"];
var newStr = strIsObj;
newStr[1] = 90; //Changed in both as it is
//03
//                  Tackling this manually:
//by using SPEREAD
var strIsObj2 = __spreadArray([], strIsObj, true);
strIsObj2[0] = "shaiq";
// console.log(strIsObj)//ye barqarar
// console.log(strIsObj2)// ye change
//04
//                    NESTED ARRAYS
//array is also an object
var obg = {
    name: "ashan",
    age: 88,
    dabbayMaiDabba: ["ahsan", "wasiq", "yamman"]
};
//NOTE: inner object spread nahin hoga
var obg2 = __assign({}, obg);
/*obg2.name = "james";
obg2.dabbayMaiDabba [1] = "don";*/
//NOTE: NAME aur AGE spread hojaiga likin DABBAY_MAIN_DABBA spread nahin hoga oske lie alag se lagana parayga spread operator ko
//                  RESOLVING this issue
obg2.dabbayMaiDabba = __spreadArray([], obg.dabbayMaiDabba, true);
obg2.name = "james";
obg2.dabbayMaiDabba[1] = "don";
console.log(obg);
console.log(obg2);
