import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import CombineReducer from './reducers/IndexReducer';
export default () => {
    const store = createStore(CombineReducer, applyMiddleware(logger))
    return store;

};

