

function countDuplicatesSetsUI() {
    var userInput = document.getElementById("userInput").value;
    console.log(userInput);
    let checkDuplicate = new Set();

    for (var index = 0; index < array.length; index++){
        var number = array[index];

        if (checkDuplicate.has(number)){
             console.log('Duplicate number is ', number);
        }
        else {checkDuplicate.add(number)}

}
    alert(checkDuplicate)
}

