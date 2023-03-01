import { GET_ALL_TRANSACTION } from "../actions/types";



export const transactionReducer = (state=[], action) => {
    switch (action.type) {
        case GET_ALL_TRANSACTION:
            return [...action.payload]
    
        default: return state
    }
}