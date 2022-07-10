import React, { useState, useEffect } from 'react';
import './SortingVisualiser.css';
import { selectionSort, mergeSort, insertionSort, quickSort } from '../SortingAlgos/SortingAlgos';

const SortingVisualiser = () => {
    const [array, setArray] = useState([])
    const [size, setSize] = useState(30)
    const [barWidth, setBarWidth] = useState(35)

    useEffect(() => {
        resetArray(size)
    }, [size])

    const resetArray = (size) => {
        const newArray = []
        for (let i = 0; i < size; i++) {
            newArray.push({
                value: Math.floor(Math.random() * 500),
                id: i
            })
        }
        setArray(newArray)
    }

    return (
        <>
            <div className="buttons">
                <button onClick={() => resetArray(size)}>Reset</button>

                <div className="sortButtonWrapper">
                    <button onClick={() => selectionSort(array, setArray)}>Selection</button>
                    <button onClick={() => insertionSort(array, setArray)}>Insertion</button>
                    <button onClick={() => mergeSort(array, setArray)}>Merge</button>
                    <button onClick={() => quickSort(array, setArray)}>Quick</button>
                </div>

                <div className="arraySizeButtons">
                    <button onClick={() => {
                        setSize(30)
                        setBarWidth(35)
                    }}>30</button>
                    <button onClick={() => {
                        setSize(100)
                        setBarWidth(9)
                    }}>100</button>
                    <button onClick={() => {
                        setSize(300)
                        setBarWidth(2)
                    }}>300</button>
                </div>
            </div>

            <div className="array-container">
                {array.map(num =>
                    <div
                        className="array-bar"
                        style={{
                            height: `${num.value}px`,
                            width: `${barWidth}px`
                        }}
                        key={num.id}>
                    </div>
                )}
            </div>
        </>
    )
}

export default SortingVisualiser