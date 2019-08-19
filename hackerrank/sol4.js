
input = [-4, 3, -9, 0, 4, 1]
let negCnt = 0;
let pstCnt = 0;
let zeros = 0;
let output = [];

run = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            negCnt++;
        } else if(arr[i] > 0) {
            pstCnt++;
        } else {
            zeros++;
        }
    }

    if (arr.length <= 0) {
        output = [0, 0, 0];
    } else {
        output = [pstCnt/arr.length, negCnt/arr.length, zeros/arr.length];
    }
    console.log(output);
}

run(input);
