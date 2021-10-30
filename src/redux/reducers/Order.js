import {
  SET_LIST_PRODUCT,
  SET_USER_FORM,
  SET_IMAGE_BASE64,
  SET_ADVANCE_PRODUCT,
  CHECKOUT,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL,
} from '../types/Order'


const INIT_STATE = {
  listProduct: [],
  userForm: {},
  imgBase64: '',
  advanceProduct: {
    roomSize: {
      width: 0,
      height: 0,
      length: 0,
    },
    laborCost: 0,
    buildingType: {},
  },
  loading: false,
}

const Order = (state = INIT_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_LIST_PRODUCT:
      return { ...state, listProduct: payload.listProduct }

    case SET_USER_FORM:
      return {
        ...state,
        userForm: { ...payload.userForm },
      }

    case SET_IMAGE_BASE64:
      return { ...state, imgBase64: payload.imgBase64 }

    case SET_ADVANCE_PRODUCT:
      return {
        ...state,
        advanceProduct: {
          ...state.advanceProduct,
          [payload.type]: payload.value,
        },
      }

    case CHECKOUT:
      return { ...state, loading: true }

    case CHECKOUT_SUCCESS:
      return { ...state, loading: false }

    case CHECKOUT_FAIL:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default Order
