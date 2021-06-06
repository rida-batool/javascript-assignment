
//let givenArr = [1,2,3,4,5,6,7,8,9] ;
const x = 2;

function evenOdd(givenArr) {

    for (let index = 0; index < givenArr.length; index++){
        let evenNumbers = [];
        let oddNumbers = [];
        let checkEven = givenArr[index] % x;
        if (checkEven === 0) {
            evenNumbers.push(givenArr[index]);
            console.log('Even',evenNumbers);
        }
        else {
            oddNumbers.push(givenArr[index]);
            console.log('Odd',oddNumbers);
        }
        
    }    
    return [evenNumbers,oddNumbers];
};

let result = evenOdd([1,2,3,4,5,6,7,8,9,10]);
console.log(result);

let result1 = evenOdd([23,24,25,26,27,28,29])
console.log(result1);
