import { legacy_createStore , applyMiddleware,combineReducers,compose} from "redux";
import thunk from 'redux-thunk'
import { Product_reducer } from "./productReducer/reducer";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RootReducer = combineReducers({
     productdata : Product_reducer
 })

const store=legacy_createStore(RootReducer,applyMiddleware(thunk))

export {store}