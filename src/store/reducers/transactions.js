import { SET_TXS, ADD_TO_WATCHER } from '../../constants'

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
      if (state.watch.includes(action.payload)) {
        return {
          ...state,
          watch: [
            ...state.watch.filter(id => id !== action.payload)
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
    default: {
      return state
    }
  }
}
