import { createStore, compose } from "redux"
import { createReducer } from "../utils/createReducer"
import { globalReducers } from "../globalReducers"

let store

export function createReduxStore(initialState) {
  const storeEnhancers = []
  if (
    __DEBUG__ &&
    typeof window !== "undefined" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function"
  ) {
    storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }
  const store = createStore(
    createReducer(globalReducers),
    initialState,
    compose(...storeEnhancers)
  )
  return store
}
