import { combineReducers } from 'redux'

import Home from 'redux/reducers/Home'
import Order from 'redux/reducers/Order'

import { RESET_STATE } from 'redux/types/Home'

const appReducer = combineReducers({
  Home,
  Order,
})

const rootReducer = (state, action) => {
  const { type } = action
  return appReducer(type === RESET_STATE ? undefined : state, action)
}

export default rootReducer
