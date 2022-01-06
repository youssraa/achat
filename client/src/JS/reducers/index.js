import { combineReducers } from "redux";
import userReducer from './userReducer.js'
import mailReducer from './mailReducer.js'

 const combineReducer = combineReducers({userReducer , mailReducer}) ;


 export default combineReducer