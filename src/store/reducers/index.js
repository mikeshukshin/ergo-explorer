import {combineReducers} from 'redux';
import { txsReducer } from './transactions';

export const reducers = combineReducers({
  transactions: txsReducer
});