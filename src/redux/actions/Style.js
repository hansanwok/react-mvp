import {
  GET_LIST_STYLE,
  GET_LIST_STYLE_SUCCESS,
  GET_LIST_STYLE_FAIL,
  GET_LIST_ROOM_SIZE,
  GET_LIST_ROOM_SIZE_SUCCESS,
  GET_LIST_ROOM_SIZE_FAIL,
  GET_LIST_ROOM_KIND,
  GET_LIST_ROOM_KIND_SUCCESS,
  GET_LIST_ROOM_KIND_FAIL,
  GET_STYLE_PRODUCTS,
  GET_STYLE_PRODUCTS_SUCCESS,
  GET_STYLE_PRODUCTS_FAIL,
  GET_LIST_BUILDING_TYPE,
  GET_LIST_BUILDING_TYPE_SUCCESS,
  GET_LIST_BUILDING_TYPE_FAIL,
  SET_ADVANCE_STYLE,
} from '../types/Style'

export const getListStyle = () => ({
  type: GET_LIST_STYLE,
})

export const getListStyleSuccess = (data) => ({
  payload: { data },
  type: GET_LIST_STYLE_SUCCESS,
})

export const getListStyleFail = () => ({
  type: GET_LIST_STYLE_FAIL,
})

export const getListRoomSize = () => ({
  type: GET_LIST_ROOM_SIZE,
})

export const getListRoomSizeSuccess = (data) => ({
  payload: { data },
  type: GET_LIST_ROOM_SIZE_SUCCESS,
})
export const getListRoomSizeFail = () => ({
  type: GET_LIST_ROOM_SIZE_FAIL,
})

export const getListRoomKind = () => ({
  type: GET_LIST_ROOM_KIND,
})

export const getListRoomKindSuccess = (data) => ({
  payload: { data },
  type: GET_LIST_ROOM_KIND_SUCCESS,
})

export const getListRoomKindFail = () => ({
  type: GET_LIST_ROOM_KIND_FAIL,
})

export const getStyleProducts = ({ styleId, type }) => ({
  payload: { styleId, type },
  type: GET_STYLE_PRODUCTS,
})

export const getStyleProductsSuccess = ({ data, styleId, type }) => ({
  payload: { data, styleId, type },
  type: GET_STYLE_PRODUCTS_SUCCESS,
})

export const getStyleProductsFail = () => ({
  type: GET_STYLE_PRODUCTS_FAIL,
})

export const getListBuildingType = () => ({
  type: GET_LIST_BUILDING_TYPE,
})

export const getListBuildingTypeSuccess = (data) => ({
  payload: { data },
  type: GET_LIST_BUILDING_TYPE_SUCCESS,
})

export const getListBuildingTypeFail = () => ({
  type: GET_LIST_BUILDING_TYPE_FAIL,
})

export const setAdvanceStyle = (data) => ({
  payload: { data },
  type: SET_ADVANCE_STYLE,
})
