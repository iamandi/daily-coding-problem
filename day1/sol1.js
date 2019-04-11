'use strict';

const arr = [1, 4, 45, 6, 10, -8]; 
const sum = 16;

let sorted = arr.sort();

let f = 0;
let l = sorted.length - 1;

while (f < l) {
    if(sorted[f]+sorted[l] === sum) {
        break;
    } else if(sorted[f]+sorted[l] < sum ) {
        f++;
    } else {
        l++;
    }
}

console.log(`numbers ${sorted[f]} + ${sorted[l]} = ${sorted[f] + sorted[l]} === ${sum}`);