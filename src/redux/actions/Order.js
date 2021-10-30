import {
  SET_LIST_PRODUCT,
  CHECKOUT,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL,
  SET_USER_FORM,
  SET_IMAGE_BASE64,
  SET_ADVANCE_PRODUCT,
} from '../types/Order'

export const setListProduct = (listProduct = []) => ({
  payload: { listProduct },
  type: SET_LIST_PRODUCT,
})

export const checkout = ({data, history}) => ({
  payload: { data, history },
  type: CHECKOUT,
})

export const checkoutSuccess = (data) => ({
  payload: { data },
  type: CHECKOUT_SUCCESS,
})

export const checkoutFail = () => ({
  type: CHECKOUT_FAIL,
})

export const setUserForm = (userForm = {}) => ({
  payload: { userForm },
  type: SET_USER_FORM,
})

export const setImageBase64 = (imgBase64) => ({
  payload: { imgBase64 },
  type: SET_IMAGE_BASE64,
})

export const setAdvanceProduct = (type, value) => ({
  payload: { type, value },
  type: SET_ADVANCE_PRODUCT,
})
