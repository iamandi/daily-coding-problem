
const N = 4;
// 1 or 2 steps at a time 

let resArr = [];

function findSteps(steps) {
    if (steps === 0 || steps === 1) {
        return 1;
    } else if(steps === 2) {
        return 2;
    } else {
        return findSteps(steps - 1) + findSteps(steps - 2);
    }
}
console.log(findSteps(N));