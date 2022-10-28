import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
const middlewareEnhancer = applyMiddleware();
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(middlewareEnhancer)
);
export default store;
