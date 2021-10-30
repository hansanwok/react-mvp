import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'
import rootSaga from './sagas'

// SAGA
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

// REDUX PERSIST
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['Home']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export const storeDispatch = (action) => store.dispatch(action)

export default store
