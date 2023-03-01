import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store';
import { SET_USER } from './store/actions/types';
import jwt from 'jwt-decode'
import {setAuthHeader} from './utils/setAuthHeader'

const token = localStorage.getItem('token')
if(token) {
  setAuthHeader(token)
  store.dispatch({
    type: SET_USER,
    payload: jwt(token)
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);