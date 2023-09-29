import axios from "axios"
import { GET_PRODUCTS } from "./types"


export const productAction = () => (dispatch) => {
    axios.get('https://dummyjson.com/products')
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data.products
            })
        })
        .catch(e => console.log(e.message))
}

