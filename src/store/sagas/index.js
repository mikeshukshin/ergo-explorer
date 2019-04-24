import { put, fork, takeEvery, delay, all, select, call } from 'redux-saga/effects'
import { setTXS, setWatch, setConfirmed } from '../../actions';
import { CHECK_TX_WATCH } from '../../constants';

const BASE_API_URL = 'http://88.198.13.202:9052';

function* background() {
  while (true) {
    const response = yield fetch(`${BASE_API_URL}/transactions/unconfirmed`);
    const txs = yield response.json();

    yield put(setTXS(txs));
    yield call(checkLists);

    yield delay(3000);
  }
}

function* checkLists() {
  const { unconfirm, watch } = yield select(state => state.transactions);
  const unconfirmIds = unconfirm.map(tx => tx.id);
  
  console.log('checkList');

  for (let tx of watch) {
    if (!unconfirmIds.includes(tx.id)) {
      console.log('confirmed', { tx })
      console.log(watch, unconfirm)
      yield put(setWatch(tx));
      yield put(setConfirmed(tx));
    }
  }
}

export function* sagas() {
  yield all([fork(background)]);
}