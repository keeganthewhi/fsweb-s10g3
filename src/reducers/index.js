import { combineReducers } from 'redux';
import favoriteReducer from './favReducer';
import moviesReducer from './moviesReducer';

export const reducers = combineReducers({
    favReducer : favoriteReducer,
    movies_reducer : moviesReducer
})