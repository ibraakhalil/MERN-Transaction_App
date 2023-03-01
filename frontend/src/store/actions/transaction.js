import Axios from "axios"
import {  GET_ALL_TRANSACTION } from "./types"


export const getAllTransaction = () => dispatch => {
    Axios.get('/api/transaction')
    .then(res => {
        dispatch({
            type: GET_ALL_TRANSACTION,
            payload: res.data
        })
    })
    .catch(e => console.log(e.message) )
}

export const createTransaction = (transaction) => dispatch => {
    Axios.post('/api/transaction', transaction)
    .then(res => {
        dispatch(getAllTransaction())
    })
    .catch(e => console.log(e.message))
}



export const deleteTransaction = (transactionId) => dispatch => {
    Axios.delete(`/api/transaction/${transactionId}`)
    .then(res => {
        dispatch(getAllTransaction())
    })
    .catch( e => console.log(e.message))
}

