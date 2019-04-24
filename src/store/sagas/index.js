import { put, fork, delay, all, select, call } from 'redux-saga/effects'
import { 
  setTXS, 
  setInfo, 
  toggleWatch,
  toggleMined,
  toggleConfirmed
 } from '../../actions';

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
    yield call(checkConfirmationsList);

    yield delay(5000);
  }
}

function* checkWatchersList() {
  const { unconfirm, watch, info } = yield select(state => state.transactions);
  const unconfirmIds = unconfirm.map(tx => tx.id);
  
  for (let tx of watch) {
    if (!unconfirmIds.includes(tx.id)) {
      yield put(toggleWatch(tx));
      yield put(toggleMined({
        ...tx,
        height: info.headersHeight
      }));
    }
  }
}

function* checkConfirmationsList() {
  const { confirm, info, blockToConfirm } = yield select(state => state.transactions);
  
  for (let tx of confirm) {
    if (tx.height + blockToConfirm <= info.headersHeight ) {
      yield put(toggleMined(tx));
      yield put(toggleConfirmed(tx));
      yield call(notifyConfirmed, tx);
    }
  }
}

function* notifyConfirmed(tx) {
  console.log('show Notification', tx);
  yield delay(10);
}

export function* sagas() {
  yield all([fork(background)]);
}