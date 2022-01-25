import { actions2 } from "../actions/actions2"

type NameState = {
name: string;
}
const initialState: NameState = {
name: '',
}
const reducer2 = (state: NameState = initialState, action: actions2 ) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
}
export default reducer2;