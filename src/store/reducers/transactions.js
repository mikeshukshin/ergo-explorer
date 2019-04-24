import { SET_TXS, ADD_TO_WATCHER, SET_CONFIRMED } from '../../constants'

const initialState = {
  unconfirm: [],
  watch: [],
  confirm: [],
  finished: []
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
    default: {
      return state
    }
  }
}
