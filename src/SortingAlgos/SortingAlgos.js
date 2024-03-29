export const selectionSort = (array, setArray) => {
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            let arr = [...array]
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                if (arr[j].value < arr[minIndex].value) {
                    minIndex = j
                }
            }
            swapValue(arr, i, minIndex)
            setArray(arr)
        }, i * 50)
    }
}

export const mergeSort = (array, setArray) => {
    let arrayCopy = [...array]
    let animations = []

    mergeSortHelper(animations, arrayCopy, 0, array.length - 1)

    const sleep = ms => new Promise(r => setTimeout(r, ms))

    const animate = async () => {
        for (let i in animations) {
            await sleep(40)
            setArray(animations[i])
        }

    }
    animate()
}

const mergeSortHelper = (arrays, mainArr, start, end) => {
    if (start >= end) { return }

    const mid = start + Math.floor((end - start) / 2)
    mergeSortHelper(arrays, mainArr, start, mid)
    mergeSortHelper(arrays, mainArr, mid + 1, end)

    // MERGE
    let start1 = start
    let end1 = mid
    let start2 = mid + 1
    let end2 = end

    let tempStart = start1
    let merged = []

    while (start1 <= end1 && start2 <= end2) {
        if (mainArr[start1].value <= mainArr[start2].value) {
            merged.push({
                value: mainArr[start1].value,
                id: mainArr[start1].id
            })
            start1++
        } else {
            merged.push({
                value: mainArr[start2].value,
                id: mainArr[start2].id
            })
            start2++
        }
    }

    while (start1 <= end1) {
        merged.push({
            value: mainArr[start1].value,
            id: mainArr[start1].id
        })
        start1++
    }

    while (start2 <= end2) {
        merged.push({
            value: mainArr[start2].value,
            id: mainArr[start2].id
        })
        start2++
    }

    Array.prototype.splice.apply(mainArr, [tempStart, merged.length].concat(merged))

    let newAnimation = [...mainArr]
    arrays.push(newAnimation)
}

export const insertionSort = (array, setArray) => {
    for (let i = 1; i < array.length; i++) {
        setTimeout(() => {
            let j = i;
            while (j > 0) {
                let arr = [...array]
                if (arr[j].value < arr[j - 1].value) {
                    swapValue(arr, j, j - 1)
                    setArray(arr)
                    j--
                } else {
                    break
                }
            }
        }, i * 50)
    }
}

export const quickSort = (array, setArray) => {
    let arrayCopy = [...array]
    let animations = []

    quickSortHelper(animations, arrayCopy, 0, array.length - 1)

    const sleep = ms => new Promise(r => setTimeout(r, ms))

    const animate = async () => {
        for (let i in animations) {
            await sleep(40)
            setArray(animations[i])
        }
    }

    animate()
}

export const quickSortHelper = (animations, mainArr, start, end) => {
    if (start >= end) { return }

    let pivot = mainArr[Math.floor((start + end) / 2)].value
    let left = start 
    let right = end

    while (left <= right) {
        while(mainArr[left].value < pivot) {
            left++
        }
        while(mainArr[right].value > pivot) {
            right--
        }
        if (left <= right) {
            swapValue(mainArr, left, right)
            const newAnimation = []
            for (let i = 0; i < mainArr.length; i++) {
                newAnimation.push({
                    value: mainArr[i].value,
                    id: mainArr[i].id
                })
            }
            animations.push(newAnimation)
            left++
            right--
        }
    }

    const index = left
    quickSortHelper(animations, mainArr, start, index - 1)
    quickSortHelper(animations, mainArr, index, end)
}

const swapValue = (arr, i, j) => {
    let temp = arr[i].value
    arr[i].value = arr[j].value
    arr[j].value = temp
}

// function that prints the values of array
const printArray = (array) => {
    let str = ""
    for (let i = 0; i < array.length; i++) {
        str += array[i].value + " "
    }
    console.log(str)
}