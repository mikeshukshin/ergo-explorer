import { 
  SET_TXS, 
  TOGGLE_WATCH_TX, 
  TOGGLE_MINED_TX, 
  TOGGLE_CONFIRM_TX,
  SET_INFO,
  BLOCKS_TO_CONFIRM,
} from '../../constants'

const initialState = {
  unconfirm: [],
  watch: [],
  mined: [],
  confirm: [],
  blockToConfirm: 1,
  info: {}
}

const toggleTX = (list, item) => {
  const ids = list.map(tx => tx.id);
  if (ids.includes(item.id)) {
    return [
        ...list.filter(tx => tx.id !== item.id)
      ]
  } else {
    return[
        ...list,
        item
      ]
  }
}


export const txsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TXS: {
      return {
        ...state,
        unconfirm: action.payload
      }
    }
    case TOGGLE_WATCH_TX: {
      return {
        ...state,
        watch: toggleTX(state.watch, action.payload)
      }
    }
    case TOGGLE_MINED_TX: {
      return {
        ...state,
        mined: toggleTX(state.mined, action.payload)
      }
    }
    case TOGGLE_CONFIRM_TX: {
      return {
        ...state,
        confirm: toggleTX(state.confirm, action.payload)
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
