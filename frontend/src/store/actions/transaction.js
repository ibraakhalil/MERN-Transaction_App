import Axios from "axios"
import { updateUser } from "./authAction"
import {  API_URL, GET_ALL_TRANSACTION } from "./types"


export const getAllTransaction = () => dispatch => {
    Axios.get(`${API_URL}/api/transaction`)
    .then(res => {
        dispatch({
            type: GET_ALL_TRANSACTION,
            payload: res.data
        })
    })
    .catch(e => console.log(e.message) )
}

export const createTransaction = (transaction) => dispatch => {
    Axios.post(`${API_URL}/api/transaction`, transaction)
    .then(res => {
        dispatch(getAllTransaction())
        dispatch(updateUser())
    })
    .catch(e => console.log(e.message))
}



export const deleteTransaction = (transactionId) => dispatch => {
    Axios.delete(`${API_URL}/api/transaction/${transactionId}`)
    .then(res => {
        dispatch(getAllTransaction())
    })
    .catch( e => console.log(e.message))
}

