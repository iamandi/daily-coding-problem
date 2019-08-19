'use strict';


// S H I N C H A N -> HNHAN
// N O H A R A A A -> NHAAAA

// Complete the commonChild function below.
function commonChild(s1, s2) {
    let arr1 = s1.split('');
    let arr2 = s2.split('');
    let temp1 = [];
    let temp2 = [];

    for(let i=0; i < arr1.length; i++) {
        for(let j=0; j < arr1.length; j++) {
            if(arr1[i] === arr2[j]) {
                temp1.push(arr1[i]);
                break;
            }
        }
    }
    console.log(temp1);
    for(let i=0; i < arr2.length; i++) {
        for(let j=0; j < temp1.length; j++) {
            if(arr2[i] === temp1[j]) {
                temp2.push(arr2[i]);
                break;
            }
        }
    }
    console.log(temp2);

    let count = 0;
    let j = 0;
    let finalCnt = 0;
    for(let i=0; i<temp1.length; i++) {
        for(; j < temp2.length; j++) {
            if(temp2[j] === temp1[i]) {
                count++;
                break;
            }
        }
        if(finalCnt < count) finalCnt = count;
    }

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = 'shinchan';
    const s2 = 'noharaaa';

    let result = commonChild(s1, s2);

    //console.log(result);

    //ws.write(result + "\n");

    //ws.end();
}

main();
