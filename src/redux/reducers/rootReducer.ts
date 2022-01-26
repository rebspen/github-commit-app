import { combineReducers } from 'redux'
import commitReducer from './commitReducer'
const rootReducer = combineReducers({
    commitReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;