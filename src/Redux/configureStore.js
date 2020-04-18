import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducer';

export default function configureStore(initialStore) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support redux dev tools
  return createStore(
    rootReducer,
    initialStore,
    composeEnhancers(
      applyMiddleware(createLogger(), reduxImmutableStateInvariant())
    )
  );
}
