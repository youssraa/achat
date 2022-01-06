// import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import combinnerReducer from '../reducers';
// const persistConfig = {
//   key: 'userReducer',
//   storage: storage,
//   whitelist: ['userReducer'] // which reducer want to store
// };
// const pReducer = persistReducer(persistConfig, combinnerReducer);
// const middleware = applyMiddleware(thunk, logger);
// const store = createStore(pReducer, middleware);
// const persistor = persistStore(store);
// export { persistor, store };




import {createStore , applyMiddleware , compose} from 'redux' ;
import thunk from 'redux-thunk';
import combineReducer from '../reducers/index'

const devTools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store=createStore(
    combineReducer , 
    compose(applyMiddleware(thunk) , devTools)
);
export default store ;