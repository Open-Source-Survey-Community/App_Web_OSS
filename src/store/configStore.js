import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from '../reducers/index'
import rootSaga from '../services/side-effect/index'
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware);
let store = createStore(rootReducer, compose(middleware,(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()|| compose)));
sagaMiddleware.run(rootSaga);
export {store};