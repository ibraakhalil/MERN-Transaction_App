import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

console.log('it is store');


export default store