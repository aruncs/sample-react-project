import { createReduxStore } from "../../app/store"
export default function attachReduxStore(req, res, next) {
  const initialState = getInitialState()
  const store = createReduxStore(initialState)
  res.store = store
  next()
}

function getInitialState() {
  return {
    a: "Hello"
  }
}
