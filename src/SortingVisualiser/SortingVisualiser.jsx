import React, { useEffect } from 'react';
import './SortingVisualiser.css';
import * as SortingAlgos from '../SortingAlgos/SortingAlgos';

import { useState } from 'react';

const SortingVisualiser = () => {
    const [array, setArray] = useState([])

    useEffect(() => {
        resetArray()
    }, [])

    const resetArray = () => {
        const newArray = []
        for (let i = 0; i < 300; i++) {
            newArray.push({
                value: Math.floor(Math.random() * 1000),
                id: i
            })
        }
        setArray(newArray)
    }

    const selectionSort = () => {
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

    const insertionSort = () => {
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

    const mergeSort = (arrays, mainArr, start, end) => {
        if (start >= end) { return }

        const mid = start + Math.floor((end - start) / 2)
        mergeSort(arrays, mainArr, start, mid)
        mergeSort(arrays, mainArr, mid + 1, end)

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

    const quickSort = () => {

    }

    const swapValue = (arr, i, j) => {
        let temp = arr[i].value
        arr[i].value = arr[j].value
        arr[j].value = temp
    }

    const mergeSortHelper = () => {
        let arrayCopy = [...array]
        let animations = []

        mergeSort(animations, arrayCopy, 0, array.length - 1)

        const sleep = ms => new Promise(r => setTimeout(r, ms))

        const animate = async () => {
            for (let i in animations) {
                await sleep(40)
                const array = animations[i]
                setArray(array)
            }

        }

        animate()
    }

    const printArray = (arr) => {
        let line = ""
        arr.forEach(e => line += " " + e.value)
        console.log(line)
    }

    return (
        <>
            <button onClick={resetArray}>Reset</button>
            <button onClick={selectionSort}>selectionSort</button>
            <button onClick={insertionSort}>insertionSort</button>
            <button onClick={mergeSortHelper}>mergeSort</button>
            <button onClick={quickSort}>quickSort</button>
            <div className="array-container">
                {array.map(num =>
                    <div
                        className="array-bar"
                        style={{ height: `${num.value}px` }}
                        key={num.id}>
                    </div>
                )}
            </div>
        </>
    )
}

export default SortingVisualiser