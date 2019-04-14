// [3, 4, -1, 1, 12, 2, 4, 8, 77, 7] --> 5
// 

let arr = [3, 4, -1, 1, 12, 2, 4, 8, 77, 7];
let temp = [];
let lowest = 1;
let flag = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        arr.splice(i, 1);
    }
}

arr.sort((a, b) => { return a-b });
console.log(arr);

for (let i=0; i < arr.length; i++) {
    if (arr[i] <= lowest) {
        lowest++;
    }
}

console.log(lowest);