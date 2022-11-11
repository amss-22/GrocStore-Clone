import { legacy_createStore , applyMiddleware,combineReducers,compose} from "redux";
import thunk from 'redux-thunk'
import {reducer as  ProductReducer}  from "./productReducer/reducer"
import { reducer as AuthReducer } from "./AuthReducer/reducer"
import {reducer as NavigationReducer} from "./NavigationReducer/reducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RootReducer= combineReducers({
    AuthReducer,
    ProductReducer,
     NavigationReducer
    })

const store = legacy_createStore(RootReducer,composeEnhancers(applyMiddleware(thunk)) )

export  {store}