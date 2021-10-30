import {
  GET_HOME_INFO,
  GET_HOME_INFO_SUCCESS,
  GET_HOME_INFO_FAIL,
  RESET_STATE,
} from '../types/Home'

export const getHomeInfo = () => ({
  type: GET_HOME_INFO,
})

export const getHomeInfoSuccess = (data) => ({
  payload: { data },
  type: GET_HOME_INFO_SUCCESS,
})

export const getHomeInfoFail = () => ({
  type: GET_HOME_INFO_FAIL,
})

export const resetState = () => ({
  type: RESET_STATE,
})
