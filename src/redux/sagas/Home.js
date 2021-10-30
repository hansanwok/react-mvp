import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import API from 'services/api'

import { GET_HOME_INFO } from '../types/Home'
import { getHomeInfoSuccess, getHomeInfoFail } from '../actions/Home'

function* handleGetHomeInfo() {
  try {
    const request = () => API.get('/screen-one')
    const response = yield call(request)
    yield put(getHomeInfoSuccess(response.data))
  } catch (error) {
    yield put(getHomeInfoFail())
  }
}

function* watchGetHomeInfo() {
  yield takeEvery(GET_HOME_INFO, handleGetHomeInfo)
}

export default function* homeSaga() {
  yield all([fork(watchGetHomeInfo)])
}
