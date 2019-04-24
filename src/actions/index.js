import { action } from 'typesafe-actions';
import { ADD_TO_WATCHER, SET_TXS, SET_CONFIRMED } from '../constants';

export const setWatch = (id) => action(ADD_TO_WATCHER, id);
export const setTXS = (txs) => action(SET_TXS, txs);
export const setConfirmed = id => action(SET_CONFIRMED, id);