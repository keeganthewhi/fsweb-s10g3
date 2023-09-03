import { combineReducers } from 'redux';
import favoriteReducer from './favReducer';

export const reducers = combineReducers({
    favReducer : favoriteReducer,
})