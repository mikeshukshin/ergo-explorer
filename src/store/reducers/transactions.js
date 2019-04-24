export const SET_TXS = 'SET_TXS';

const initialState = {
  list: []
}

export const txsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TXS: {
      return {
        ...state,
        list: action.payload
      }
    }
    default: {
      return state
    }
  }
}
