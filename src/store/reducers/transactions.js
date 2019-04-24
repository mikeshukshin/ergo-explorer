import { 
  SET_TXS, 
  ADD_TO_WATCHER, 
  SET_CONFIRMED,
  SET_INFO,
  BLOCKS_TO_CONFIRM,
} from '../../constants'

const initialState = {
  unconfirm: [],
  watch: [],
  confirm: [],
  finished: [],
  blockToConfirm: 2,
  info: {}
}

export const txsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TXS: {
      return {
        ...state,
        unconfirm: action.payload
      }
    }
    case ADD_TO_WATCHER: {
      const ids = state.watch.map(tx => tx.id);
      if (ids.includes(action.payload.id)) {
        return {
          ...state,
          watch: [
            ...state.watch.filter(tx => tx.id !== action.payload.id)
          ]
        }
      } else {
        return {
          ...state,
          watch: [
            ...state.watch,
            action.payload
          ]
        }
      }
    }
    case SET_CONFIRMED: {
      return {
        ...state,
        confirm: [
          ...state.confirm,
          action.payload
        ]
      }
    }
    case BLOCKS_TO_CONFIRM: {
      return {
        ...state,
        blockToConfirm: action.payload
      }
    }
    case SET_INFO: {
      return {
        ...state,
        info: action.payload
      }
    }
    default: {
      return state
    }
  }
}
