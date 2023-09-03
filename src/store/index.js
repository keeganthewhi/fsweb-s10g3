import {reducers} from './../reducers';
import { legacy_createStore as createStore } from 'redux';

export const store = createStore(reducers);