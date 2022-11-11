import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk'
import { Product_reducer } from "./productReducer/reducer";
import { cartReducer } from "./CartReducer/reducer";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RootReducer = combineReducers({
    productdata: Product_reducer,
    cartReducer:cartReducer
})

const store = legacy_createStore(RootReducer, applyMiddleware(thunk))

export { store }