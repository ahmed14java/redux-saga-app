import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

export default store;