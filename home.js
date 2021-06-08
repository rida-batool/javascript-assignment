
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

// let result = evenOdd([1,2,3,4,5,6,7,8,9,10]);
// console.log(result);

// let result1 = evenOdd([23,24,25,26,27,28,29]);
// console.log(result1);

// let result2 = evenOdd([]);
// console.log(result2);

// let position = 0
// let numbers = [0, 1, 2, 3, 30, 20, 10, 45, 100, 1, 25, 2300, 78, 1,2];
// let a = numbers[position];
// let b = numbers[position+1];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

function getDuplicates(numbers){
    duplicates = [];

    for (let i=0; i < numbers.length; i++){
        let value = numbers[i];
        let nextValue = numbers[i+1];

        if (duplicates.length === 0 && value === nextValue) {
            duplicates.push(nextValue);
        }
        else if (duplicates.length !== 0 && value === nextValue && (duplicates[duplicates.length-1] === nextValue)) {
            console.log('duplicate already added');
            }  
        else if (duplicates.length !== 0 && value === nextValue) {
            duplicates.push(nextValue);
        }
        }  
        return duplicates;
    }
    

let duplicateOutput = getDuplicates([0,1,1,1,2,2,3,4,56,78,78]);
console.log(duplicateOutput);


let duplicateOutput1 = getDuplicates([0,1,1,1,1,2,2,3,4,56,56,78,78]);
console.log(duplicateOutput1);


