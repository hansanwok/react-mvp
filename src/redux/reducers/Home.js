import { GET_HOME_INFO_SUCCESS } from '../types/Home'

const INIT_STATE = {
  homeInfo: {
    number_vat: 0,
  },
  loading: false,
}

const Home = (state = INIT_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_HOME_INFO_SUCCESS:
      return {
        ...state,
        homeInfo: {
          ...payload.data,
          number_vat: payload.data.number_vat / 100,
        },
      }

    default:
      return state
  }
}

export default Home
