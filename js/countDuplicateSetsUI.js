

function countDuplicatesSetsUI(array) {
    // console.log(value.formValueId.value);
    // alert(value);
    
    // var array = value.formValueId.value.split(",").map(Number);
    // console.log(array);

    let checkDuplicate = new Set();

    for (var index = 0; index < array.length; index++){
        var number = array[index];

        if (checkDuplicate.has(number)){
            console.log('Duplicate number is ', number);
            // alert(number);
        }
        else {checkDuplicate.add(number)}

}
}   

// output = countDuplicatesSetsUI([0,1,1,1,2,2,2,3,4,56,78,78,100,100])
// console.log(output)


