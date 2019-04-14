
const arr = [1, 2, 3, 4, 5];  //[120, 60, 40, 30, 24]

// l = [1, 1, 2, 6, 24]
// r = [120, 60, 20, 5, 1]
// prod = [120, 60, 40, 30, 24]

function productArray(arr) {
    let left = [];
    let right = [];
    let prod = [];

    left[0] = 1;
    right[arr.length - 1] = 1;
    for (let i=1; i<arr.length; i++) {
        left[i] = left[i-1] * arr[i-1];
    }

    for (let i=arr.length-2; i>=0; i--) {
        right[i] = right[i+1] * arr[i+1];
    }
    
    for(let i=0; i<arr.length; i++) {
        prod[i] = left[i] * right[i];
    }
    return prod;
}

console.log(productArray(arr));