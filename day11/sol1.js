'use strict';

const arr = ['dog', 'deer', 'deal'];
const queryString = 'de';
let resArr = [];

for (let i = 0; i < arr.length; i++) {
    if(arr[i].startsWith(queryString)) {
        resArr.push(arr[i]);
    }
}
console.log(resArr);
resArr = [];

for (let i = 0; i < arr.length; i++) {
    if(arr[i].substr(0, queryString.length) === queryString) {
        resArr.push(arr[i]);
    }
}
console.log(resArr);
resArr = [];

for (let i = 0; i < arr.length; i++) {
    if(arr[i].substring(0, queryString.length) === queryString) {
        resArr.push(arr[i]);
    }
}
console.log(resArr);