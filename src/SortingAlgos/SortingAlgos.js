export const mergeSort = (arr, start, end) => {
    if (start >= end) {
        return 
    }

    const mid = start + Math.floor((end - start) / 2)
    mergeSort(arr, start, mid)
    mergeSort(arr, mid+1, end)

    merge(arr, start, mid, mid+1, end)
}

const merge = (arr, start1, end1, start2, end2) => {
    let temp = start1
    let merged = []
    while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
            merged.push(arr[start1])
            start1++
        } else {
            merged.push(arr[start2])
            start2++
        }
    }

    while (start1 <= end1) {
        merged.push(arr[start1])
        start1++
    }

    while (start2 <= end2) {
        merged.push(arr[start2])
        start2++
    }


    Array.prototype.splice.apply(arr, [temp, merged.length].concat(merged));
}

let testArray = []
for (let i = 0; i < 10; i++) {
    testArray.push(Math.floor(Math.random() * 1000))
}
mergeSort(testArray, 0, 9)

