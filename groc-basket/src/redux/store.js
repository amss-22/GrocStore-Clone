import { legacy_createStore, applyMiddleware, combineReducers, } from "redux";
import thunk from 'redux-thunk'
import { Product_reducer } from "./productReducer/reducer";
import { cartReducer } from "./CartReducer/reducer";
import { reducer as AuthReducer} from "./AuthReducer/reducer"
import {reducer as NavigationReducer} from "./NavigationReducer/reducer"
import {reducer as SingleProductReducer} from "./singleProductReducer/reducer"
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer = combineReducers({
    productdata: Product_reducer,
    cartReducer:cartReducer,
    AuthReducer,
    NavigationReducer,
    SingleProductReducer
})
const store = legacy_createStore(RootReducer, applyMiddleware(thunk))
export { store }