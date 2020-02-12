import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import startingData from '../Data/MockData';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, startingData, applyMiddleware(thunk));

export default store;