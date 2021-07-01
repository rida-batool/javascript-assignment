

function findDuplicateObject(array){
    var checkDuplicate = {};
    for (var index = 0; index < array.length; index++){
        var number = array[index];

        if( checkDuplicate[number] == 1 ){
            console.log(number);
            checkDuplicate[number] = checkDuplicate[number] + 1;
        }else if( checkDuplicate[number] > 1 ){
            checkDuplicate[number] = checkDuplicate[number] + 1;
        }else{
            checkDuplicate[number] = 1;
        }
    }
    return checkDuplicate;
}


// console.log("--------------Start Find duplicate with Objects-------------")

// duplicateOutput = findDuplicateObject([0,1,1,1,2,2,2,3,4,56,78,78,100,100]);
// console.log(duplicateOutput);


// duplicateOutput1 = findDuplicateObject([0,0]);
// console.log(duplicateOutput1);

// console.log("--------------End Find duplicate with Objects-------------")
