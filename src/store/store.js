
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk';
// import {appReducer} from './reducers/app.reducer.js'
import { wapReducer } from './reducers/wap.reducer.js'
// import { wapReducer } from './reducers/user.reducer.js'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    wapModule: wapReducer
})


// export const store = createStore(rootReducer,
//     compose(applyMiddleware(ReduxThunk))) //Passing the reducer
export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))) //Passing the reducer

