import {combineReducers} from 'redux'
import counterModule from './Counter.js'

const rootReducer = combineReducers({
  counterModule
})

export default rootReducer;