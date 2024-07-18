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
//04
//                    NESTED ARRAYS
var obg = {
    name: "ashan",
    age: 88,
    dabbayMaiDabba: ["ahsan", "wasiq", "yamman"] //NOTE: inner object spread nahin hoga
};
var obg2 = __assign({}, obg);
obg2.name = "james";
obg2.dabbayMaiDabba[1] = "don";
/*_____________________________________________________________________
NOTE: NAME aur AGE spread hojaiga likin DABBAY_MAIN_DABBA spread nahin hoga oske lie alag se lagana parayga spread operator ko

                   RESOLVING this issue
*/
var obj = {
    name: "lulu",
    age: 199,
    innerObj: ["ahsan", "wasiq", "yamman"] //
};
var obj2 = __assign({}, obj);
obj2.innerObj = __spreadArray([], obj.innerObj, true);
obj2.name = "james";
obj2.innerObj[1] = "don";
console.log(obj);
console.log(obj2);
