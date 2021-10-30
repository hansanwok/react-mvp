import { all } from 'redux-saga/effects'

import homeSaga from 'redux/sagas/Home'
import styleSaga from 'redux/sagas/Style'
import orderSaga from 'redux/sagas/Order'

export default function* rootSaga() {
  yield all([homeSaga(), styleSaga(), orderSaga()])
}
