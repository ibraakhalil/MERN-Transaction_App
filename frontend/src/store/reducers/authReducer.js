import { SET_USER, USER_ERROR } from "../actions/types";



const init = {
    isAuthenticate: false,
    user: {},
    error: null
}


export const authReducer = (state = init, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticate: Object.keys(action.payload).length !== 0
            }
        case USER_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default: return state
    }
}