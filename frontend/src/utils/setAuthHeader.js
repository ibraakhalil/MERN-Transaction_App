import Axios from 'axios'

export const setAuthHeader = token => {
    if(token) {
        Axios.defaults.headers.common['authorization'] = token
    } else {
        Axios.defaults.headers.common['authorization'] = ''
    }
}

