import Axios from 'axios'
import { API_URL, SET_USER, USER_ERROR } from './types'
import jwt from 'jwt-decode'
import { setAuthHeader } from '../../utils/setAuthHeader'


const userError = (err) => {
    return {
        type: USER_ERROR,
        payload: err
    }
}

export const register = (user, navigate) => dispatch => {
    Axios.post(`${API_URL}/api/user/register`, user)
        .then(res => {
            navigate('/auth/login')
        })
        .catch(e => dispatch(userError(e.response.data.error)))
}

export const login = (user, navigate) => dispatch => {
    Axios.post(`${API_URL}/api/user/login`, user)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            setAuthHeader(res.data.token)
            const user = jwt(res.data.token)
            dispatch({
                type: SET_USER,
                payload: user
            })
            navigate('/')
        })
        .catch(e => dispatch(userError(e.response.data.error)))
}

export const updateUser = () => dispatch => {
    Axios.get(`${API_URL}/api/user/update`)
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(e => dispatch(userError(e.response.data.error)))
}