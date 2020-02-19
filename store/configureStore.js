import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(pReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export {persistor, store};
