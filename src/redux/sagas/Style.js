import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import API from 'services/api'

import { getSlug } from 'helpers/constants'

import {
  GET_LIST_STYLE,
  GET_LIST_ROOM_SIZE,
  GET_LIST_ROOM_KIND,
  GET_STYLE_PRODUCTS,
  GET_LIST_BUILDING_TYPE,
} from '../types/Style'
import {
  getListStyleSuccess,
  getListStyleFail,
  getListRoomSizeSuccess,
  getListRoomSizeFail,
  getListRoomKindSuccess,
  getListRoomKindFail,
  getStyleProductsSuccess,
  getStyleProductsFail,
  getListBuildingTypeSuccess,
  getListBuildingTypeFail,
  setAdvanceStyle,
} from '../actions/Style'

function* handleGetListStyle() {
  try {
    const request = () => API.get('/get-style-collections')
    const response = yield call(request)
    yield put(getListStyleSuccess(response.data))
  } catch (error) {
    yield put(getListStyleFail())
  }
}

function* handleGetListRoomSize() {
  try {
    const request = () =>
      API.post('/get-labor-products', {
        product_category_slug: getSlug('roomSize'),
      })
    const response = yield call(request)
    yield put(getListRoomSizeSuccess(response.data))
  } catch (error) {
    yield put(getListRoomSizeFail())
  }
}

function* handleGetListRoomKind() {
  try {
    const request = () =>
      API.post('/get-labor-products', {
        product_category_slug: getSlug('roomKind'),
      })
    const response = yield call(request)
    yield put(getListRoomKindSuccess(response.data))
  } catch (error) {
    yield put(getListRoomKindFail())
  }
}

function* handleGetListBuildingType() {
  try {
    const request = () =>
      API.post('/get-labor-products', {
        product_category_slug: getSlug('buildingType'),
      })
    const response = yield call(request)
    yield put(getListBuildingTypeSuccess(response.data))
  } catch (error) {
    yield put(getListBuildingTypeFail())
  }
}

function* handleGetStyleProducts({ payload: { styleId, type } }) {
  try {
    const cateProductByStyleIdRequest = () =>
      API.post('/get-products-and-categories-by-parent-id', {
        parent_id: styleId,
      })

    const optionalCateProductRequest = () =>
      API.get('/get-optional-products-and-categories-by-parent-id')

    const request =
      type === 'optional'
        ? optionalCateProductRequest
        : cateProductByStyleIdRequest

    const response = yield call(request)
    yield all([
      put(getStyleProductsSuccess({ data: response.data, styleId, type })),
      put(setAdvanceStyle(styleId)),
    ])
  } catch (error) {
    yield put(getStyleProductsFail())
  }
}

function* watchGetListStyle() {
  yield takeEvery(GET_LIST_STYLE, handleGetListStyle)
}

function* watchGetListRoomSize() {
  yield takeEvery(GET_LIST_ROOM_SIZE, handleGetListRoomSize)
}

function* watchGetListRoomKind() {
  yield takeEvery(GET_LIST_ROOM_KIND, handleGetListRoomKind)
}

function* watchGetListBuildingType() {
  yield takeEvery(GET_LIST_BUILDING_TYPE, handleGetListBuildingType)
}

function* watchGetStyleProducts() {
  yield takeEvery(GET_STYLE_PRODUCTS, handleGetStyleProducts)
}

export default function* styleSaga() {
  yield all([
    fork(watchGetListStyle),
    fork(watchGetListRoomSize),
    fork(watchGetListRoomKind),
    fork(watchGetStyleProducts),
    fork(watchGetListBuildingType),
  ])
}
