import { put, fork, delay, all, select, call } from 'redux-saga/effects'
import { setTXS, setWatch, setConfirmed, setInfo } from '../../actions';

const BASE_API_URL = 'http://88.198.13.202:9052';

function* background() {
  while (true) {
    const txResponse = yield fetch(`${BASE_API_URL}/transactions/unconfirmed`);
    const txs = yield txResponse.json();
    yield put(setTXS(txs));

    const infoResponse = yield fetch(`${BASE_API_URL}/info`);
    const info = yield infoResponse.json();
    yield put(setInfo(info));

    yield call(checkWatchersList);

    yield delay(5000);
  }
}

function* checkWatchersList() {
  const { unconfirm, watch, info } = yield select(state => state.transactions);
  const unconfirmIds = unconfirm.map(tx => tx.id);
  
  for (let tx of watch) {
    if (!unconfirmIds.includes(tx.id)) {
      yield put(setWatch(tx));
      yield put(setConfirmed({
        ...tx,
        height: info.headersHeight
      }));
    }
  }
}

export function* sagas() {
  yield all([fork(background)]);
}