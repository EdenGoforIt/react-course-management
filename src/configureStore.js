import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
