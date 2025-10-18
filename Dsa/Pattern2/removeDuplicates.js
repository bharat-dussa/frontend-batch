function removeDuplicates(arr) { 

    let slow = 0;

    for(let fast = 1; fast < arr.length; fast++) {
        if(arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    console.log('slow', slow);

    return arr.slice(0, slow + 1);
}

console.log('removeDuplicates', removeDuplicates([1,1,2,2,3,3,4,4,5,5, 7, 9, 89]));