import { action } from 'typesafe-actions';

export const SET_TXS = 'SET_TXS';

export const setTXS = (txs) => action(SET_TXS, txs);