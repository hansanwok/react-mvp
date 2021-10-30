import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import API from 'services/api'

import { CHECKOUT } from '../types/Order'
import { checkoutSuccess, checkoutFail } from '../actions/Order'

function* handleCheckout({ payload: { history, data } }) {
  try {
    const request = () => API.post('/create-new-order', data)
    const response = yield call(request)
    yield put(checkoutSuccess(response.data))
    history.push('/order-success')
  } catch (error) {
    alert(JSON.stringify(error))
    yield put(checkoutFail())
  }
}

function* watchCheckout() {
  yield takeEvery(CHECKOUT, handleCheckout)
}

export default function* orderSaga() {
  yield all([fork(watchCheckout)])
}
