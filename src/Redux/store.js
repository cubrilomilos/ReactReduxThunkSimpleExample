import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {
    dataRows: [],
    sidebarData: null,
    footerData: ''
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;