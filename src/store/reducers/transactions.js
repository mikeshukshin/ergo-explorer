export const SET_TXS = 'SET_TXS';

const initialState = {
  txs: []
}

export const txsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TXS: {
      return {
        ...state,
        txs: action.payload
      }
    }
    default: {
      return state
    }
  }
}
