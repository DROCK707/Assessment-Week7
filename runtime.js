const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendXL = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertXL = perf.stop();

//Large ==========================
perf.start();                     
doublerAppend(largeArray);
let resultsAppendL = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsertL = perf.stop();

//Medium ==========================
perf.start();                     
doublerAppend(mediumArray);
let resultsAppendM = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsertM = perf.stop();

//Small =========================
perf.start();                     
doublerAppend(smallArray);
let resultsAppendS = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsertS = perf.stop();

//Tiny ==========================
perf.start();                     
doublerAppend(tinyArray);
let resultsAppendXS = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsertXS = perf.stop();

// console.log("========================")

// console.log('Results for the tinyArray');
// console.log("append", resultsAppendXS.preciseWords);
// console.log("insert", resultsInsertXS.preciseWords);

console.log("========================")

console.log('Results for the smallArray');
console.log("append", resultsAppendS.preciseWords);
console.log("insert", resultsInsertS.preciseWords);


// console.log("========================")


// console.log('Results for the mediumArray');
// console.log("append", resultsAppendM.preciseWords);
// console.log("insert", resultsInsertM.preciseWords);

// console.log("========================")

// console.log('Results for the largeArray');
// console.log("append", resultsAppendL.preciseWords);
// console.log("insert", resultsInsertL.preciseWords);

// console.log("========================")

// console.log('Results for the extraLargeArray');
// console.log("append", resultsAppendXL.preciseWords);
// console.log("insert", resultsInsertXL.preciseWords);

// console.log("========================")
