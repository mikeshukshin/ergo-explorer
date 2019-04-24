import { action } from 'typesafe-actions';
import { ADD_TO_WATCHER } from '../constants';

export const setWatch = (id) => action(ADD_TO_WATCHER, id);