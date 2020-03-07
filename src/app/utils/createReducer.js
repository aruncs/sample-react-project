export function createReducer(reducerFunctionsMap) {
  return function(state, action) {
    const { type, payload } = action
    const reducerFunction = reducerFunctionsMap[type]
    if (reducerFunction && typeof reducerFunction === "function") {
      return reducerFunction(state, payload)
    }
    return state
  }
}
