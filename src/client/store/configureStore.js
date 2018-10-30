import { createStore, applyMiddleware } from 'redux';
import reduximmutablestateinvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';


export default function confugureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduximmutablestateinvariant()),
  );
}
