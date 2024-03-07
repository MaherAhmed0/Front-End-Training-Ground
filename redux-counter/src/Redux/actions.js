export const ADD = 'ADD'
export const SUB = 'SUB'
export const MUL = 'MUL'
export const DIV = 'DIV'
export const RESET = 'RESET'

export const addAction = () => {
    return {
        type: ADD
    }
}
export const subAction = () => {
    return {
        type: SUB
    }
}
export const mulAction = () => {
    return {
        type: MUL
    }
}
export const divAction = () => {
    return {
        type: DIV
    }
}
export const resetAction = () => {
    return {
        type: RESET
    }
}