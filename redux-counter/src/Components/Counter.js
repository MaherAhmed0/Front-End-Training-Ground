import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const performAdd = () => {
        setCounter(counter => counter + 1)
    }
    const performSub = () => {
        setCounter(counter => counter - 1)
    }
    const performMul = () => {
        setCounter(counter => counter * 2)
    }
    const performDiv = () => {
        setCounter(counter => counter / 2)
    }
    const performReset = () => {
        setCounter(counter => counter = 0)
    }

    return (
        <div className="counter-container">
            <h2>Counter</h2>
            <p>{counter}</p>
            <div className="btns">
                <button onClick={performAdd}>ADD 1</button>
                <button onClick={performSub}>SUB 1</button>
                <button onClick={performMul}>MUL 2</button>
                <button onClick={performDiv}>DIV 2</button>
                <button onClick={performReset}>RESET</button>
            </div>
        </div>
    )
}