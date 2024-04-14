// ceating a array
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using for-loop
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var onenumber = Numbers_1[_i];
    var ordinalEnding = void 0;
    if (onenumber === 1) {
        ordinalEnding = "st";
    }
    else if (onenumber === 2) {
        ordinalEnding = "nd";
    }
    else if (onenumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(onenumber).concat(ordinalEnding));
}
