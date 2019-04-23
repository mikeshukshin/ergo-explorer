import { take, put, call, fork, cancel, cancelled, delay, all } from 'redux-saga/effects'
import { setTXS } from '../../actions/setTransactions';

const BASE_API_URL = 'http://88.198.13.202:9052';

function* background() {
  while (true) {
    const response = yield fetch(`${BASE_API_URL}/transactions/unconfirmed`);
    const txs = yield response.json();

    yield put(setTXS(txs));

    yield delay(5000);
  }
}

export function* sagas() {
  yield all([fork(background)]);
}