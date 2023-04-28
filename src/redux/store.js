//Legacy deprecated createStore:
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { loadingReducer } from "./loadingReducer";
import { ratesReducer } from "./ratesReducer";

const rootReducer = combineReducers({
  rates: ratesReducer,

  loading: loadingReducer,
});
const logger = createLogger({ collapsed: true });

const middleWare = [];
if (process.env.ENVIRONMENT !== "production") {
  middleWare.push(logger);
}

const composedEnhancer = composeWithDevTools(
  applyMiddleware(logger, thunkMiddleware)
);

const store = createStore(rootReducer, composedEnhancer);

export default store;
