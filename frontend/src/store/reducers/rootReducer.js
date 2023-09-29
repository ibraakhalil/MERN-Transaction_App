import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { transactionReducer } from "./transactionReducer";
import { productReducer } from "./productReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    transactions: transactionReducer,
    products: productReducer
})


export default rootReducer