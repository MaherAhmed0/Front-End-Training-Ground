import { useDispatch, useSelector } from "react-redux"
import { addAction, divAction, mulAction, resetAction, subAction } from '../Redux/actions'

export default function ReduxCounter() {
    const counter = useSelector(state => state.count)
    const dispatch = useDispatch()

    const performAdd = () => {
        dispatch(addAction())
    }
    const performSub = () => {
        dispatch(subAction())
    }
    const performMul = () => {
        dispatch(mulAction())
    }
    const performDiv = () => {
        dispatch(divAction())
    }
    const performReset = () => {
        dispatch(resetAction())
    }

    return (
        <div className="counter-container">
            <h2>Redux Counter</h2>
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
