import { ADD, DIV, MUL, RESET, SUB } from "./actions"

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, count: state.count + 1 };
        case SUB:
            return { ...state, count: state.count - 1 };
        case MUL:
            return { ...state, count: state.count * 2 };
        case DIV:
            return { ...state, count: state.count / 2 };
        case RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
};
export default counterReducer