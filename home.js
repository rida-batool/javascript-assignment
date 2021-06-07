
function evenOdd(givenArr) {
    let evenNumbers = [];
    let oddNumbers = [];
    for (let index = 0; index < givenArr.length; index++){

        let number = givenArr[index];
        if (number % 2 === 0) {
            evenNumbers.push(number);
            
        }
        else {
            oddNumbers.push(number);
            
        }
        
    }    
    return [evenNumbers,oddNumbers];
};

let result = evenOdd([1,2,3,4,5,6,7,8,9,10]);
console.log(result);

let result1 = evenOdd([23,24,25,26,27,28,29])
console.log(result1);

let result2 = evenOdd([])
console.log(result2);