/* 
! ENUMS
? There are three types of Enums:
// 01_Numeric,
// 02_String,
// 03_Hybrid / Hytrogeneous
*/


//! 01_Enums_Numeric 
enum pakBorders{
//? property = name,
    NORTH, //0
    SOUTH, //1
    EAST, //2
    WEST, //3
//? These values are default
}
//* console.log(pakBorders);



//! 02_Enums_String
enum studentsClass1{
//? property = name,
    ahsan = "Ahsan",
    zohair = "Zohair",
    hitesh = "Hitesh",
    zakir = "Zakir",
//? Ismein koi property nahin chor sakhtay "COMPILER: Tou hi karlei bhai!"
}



//! 03_Enums__Hybrid / Hytrogeneous
//? Mixture of String and Numeric
enum mixture {
    AhsanRoll = "nope",
    AhmedRoll = "nope",
    ShahidRoll = 1257,
//? as soon as number enters compiler takes this in its own hand
    FayyazRoll, //1258
}
//* console.log(mixture);
