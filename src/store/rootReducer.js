import { combineReducers, createStore } from 'redux'
import blogReducer from './blogReducer'


const reducers = {
   blogReducer
}

const reducer = combineReducers(reducers)
const rootReducer = createStore(reducer)

export default rootReducer