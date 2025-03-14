const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (num1 > num2){
        for (let i=num2; i <= num1; i++){
            finalSum += i;
        }
    }else{
        for (let i=num1; i <= num2; i++){
            finalSum += i;
        }
    }
    return finalSum;
};

console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
