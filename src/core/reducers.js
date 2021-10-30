import { combineReducers } from 'redux'

import Home from 'redux/reducers/Home'
import Style from 'redux/reducers/Style'
import Order from 'redux/reducers/Order'

import { RESET_STATE } from 'redux/types/Home'

const appReducer = combineReducers({
  Home,
  Style,
  Order,
})

const rootReducer = (state, action) => {
  const { type } = action
  return appReducer(type === RESET_STATE ? undefined : state, action)
}

export default rootReducer
