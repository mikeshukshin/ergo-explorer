import { action } from 'typesafe-actions';
import { SET_TXS } from '../constants';

export const setTXS = (txs) => action(SET_TXS, txs);