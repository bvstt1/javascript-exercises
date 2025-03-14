const removeFromArray = function(array, element) {
    if (array.includes(element)){
        let index = array.indexOf(element);
        array.splice(index, 1);
        return array;
    }
    else{
        return console.log("The array doesn't contain the element.")
    }
};
array = [1,2,3,4]
console.log(removeFromArray(array,))

// Do not edit below this line
module.exports = removeFromArray;
