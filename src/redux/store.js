import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import results from './reducers/results';
import currentItem from './reducers/currentItem';
import searchResults from './reducers/searchResults';

const reducer = combineReducers({
    results,
    currentItem,
    searchResults,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;