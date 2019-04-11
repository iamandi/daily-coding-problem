'use strict';

const arr = [1, 4, 45, 6, 10, -8];
const sum = 16;
const check = [];

for(let ele of arr) {
    console.log(ele);
    if (check.includes(sum - ele)) {
        console.log(`numbers ${ele} + ${sum - ele} = ${sum} === ${sum}`);
        break;
    } else {
        check.push(ele);
    }
}