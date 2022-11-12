import { legacy_createStore, applyMiddleware, combineReducers, } from "redux";
import thunk from 'redux-thunk'
import { reducer as AuthReducer } from "./AuthReducer/reducer"
import {reducer as NavigationReducer} from "./NavigationReducer/reducer"

const RootReducer= combineReducers({
    AuthReducer,
     NavigationReducer
    })

const store = legacy_createStore(RootReducer, applyMiddleware(thunk))

export { store }