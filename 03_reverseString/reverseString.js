const reverseString = function(str) {
    let result = "";
    let reverseArray = [];
    for (i=0; i < str.length; i++){
        reverseArray.push(str[str.length - 1 - i])
    }
    result = reverseArray.join("");
    return result;
}

console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
