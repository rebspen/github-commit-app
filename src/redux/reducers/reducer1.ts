import { actions1 } from "../actions/actions1";

type CountState = {
    count: number;
}
const initialState: CountState = {
    count: 0,
}
const reducer1 = (state: CountState = initialState, action: actions1) => {
    switch(action.type) {
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        default:
            return state;
    }
}
export default reducer1;