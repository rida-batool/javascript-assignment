
function countDuplicatesSets(array) {

        let checkDuplicate = new Set();

        for (var index = 0; index < array.length; index++){
            var number = array[index];

            if (checkDuplicate.has(number)){
                 console.log('Duplicate number is ', number);
            }
            else {checkDuplicate.add(number)}

}
}

// console.log("--------------Start Find duplicate with sets-------------")
// duplicateOutput = countDuplicatesSets([0,1,1,1,2,2,2,3,4,56,78,78,100,100]);
// console.log(duplicateOutput);


// duplicateOutput1 = countDuplicatesSets([]);
// console.log(duplicateOutput1);


// console.log("--------------End Find duplicate with sets-------------")


