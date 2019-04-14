
const arr = [1, 2, 3, 4, 5];  //[120, 60, 40, 30, 24]

function productArray(arr) {
    let temp = arr;
    let prod = 1;
    for (let i=1; i<arr.length; i++) {
        prod = arr[i] * prod;
    }

    for (let i=0; i<arr.length; i++) {
        temp[i] = prod / arr[i];
    }

    return temp;
}

console.log(productArray(arr));