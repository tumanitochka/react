import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger'

const middlleweres = []

if(process.env.NODE_ENV === "development"){
    middlleweres.push(logger)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlleweres)
});

export default store;