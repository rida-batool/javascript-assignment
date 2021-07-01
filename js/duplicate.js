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
        else if (duplicates.length !== 0 && value === nextValue && (duplicates[duplicates.length-1] !== nextValue)) {
            duplicates.push(nextValue);
            }  
        
        }  
        return duplicates;
    }


// let duplicateOutput = getDuplicates([0,1,1,1,2,2,3,4,56,78,78,100,100]);
// console.log(duplicateOutput);


// let duplicateOutput1 = getDuplicates([0,0]);
// console.log(duplicateOutput1);



