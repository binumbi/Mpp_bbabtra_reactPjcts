//store.js
import { configureStore } from '@reduxjs/toolkit';
// import countReducer from '../Reducer/countReducer';
import rootreducers from '../rootReducers/rootreducers';

const store = configureStore({
    reducer : rootreducers,
});

export default store;