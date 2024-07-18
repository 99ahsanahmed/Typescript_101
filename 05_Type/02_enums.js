"use strict";
/*
! ENUMS
? There are three types of Enums:
// 01_Numeric,
// 02_String,
// 03_Hybrid / Hytrogeneous
*/
//! 01_Enums_Numeric 
var pakBorders;
(function (pakBorders) {
    //? property = name,
    pakBorders[pakBorders["NORTH"] = 0] = "NORTH";
    pakBorders[pakBorders["SOUTH"] = 1] = "SOUTH";
    pakBorders[pakBorders["EAST"] = 2] = "EAST";
    pakBorders[pakBorders["WEST"] = 3] = "WEST";
    //? These values are default
})(pakBorders || (pakBorders = {}));
//* console.log(pakBorders);
//! 02_Enums_String
var studentsClass1;
(function (studentsClass1) {
    //? property = name,
    studentsClass1["ahsan"] = "Ahsan";
    studentsClass1["zohair"] = "Zohair";
    studentsClass1["hitesh"] = "Hitesh";
    studentsClass1["zakir"] = "Zakir";
    //? Ismein koi property nahin chor sakhtay "COMPILER: Tou hi karlei bhai!"
})(studentsClass1 || (studentsClass1 = {}));
//! 03_Enums__Hybrid / Hytrogeneous
//? Mixture of String and Numeric
var mixture;
(function (mixture) {
    mixture["AhsanRoll"] = "nope";
    mixture["AhmedRoll"] = "nope";
    mixture[mixture["ShahidRoll"] = 1257] = "ShahidRoll";
    //? as soon as number enters compiler takes this in its own hand
    mixture[mixture["FayyazRoll"] = 1258] = "FayyazRoll";
})(mixture || (mixture = {}));
//* console.log(mixture);
