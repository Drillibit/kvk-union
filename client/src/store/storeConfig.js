import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ItemReducer from '../reducers/ItemReducer';
import FilterReducer from '../reducers/FilterReducer';

export default () => { 
    const store = createStore(
        combineReducers({
            items: ItemReducer,
            filters: FilterReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};