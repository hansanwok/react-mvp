import { all } from 'redux-saga/effects'

import homeSaga from 'redux/sagas/Home'
import orderSaga from 'redux/sagas/Order'

export default function* rootSaga() {
  yield all([homeSaga(), orderSaga()])
}
