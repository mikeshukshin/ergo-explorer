import { action } from 'typesafe-actions';
import { 
  SET_TXS, 
  TOGGLE_WATCH_TX, 
  TOGGLE_MINED_TX, 
  TOGGLE_CONFIRM_TX,
  BLOCKS_TO_CONFIRM, 
  SET_INFO, 
} from '../constants';

export const setTXS = (txs) => action(SET_TXS, txs);
export const toggleWatch = (id) => action(TOGGLE_WATCH_TX, id);
export const toggleMined = id => action(TOGGLE_MINED_TX, id);
export const toggleConfirmed = id => action(TOGGLE_CONFIRM_TX, id);
export const setBlocksToConfirm = count => action(BLOCKS_TO_CONFIRM, count);
export const setInfo = info => action(SET_INFO, info);
