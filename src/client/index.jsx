import { h, render } from "preact"
import { getAllRoutes } from "../app/routes"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createReduxStore } from "../app/store"
import Header from "../app/components/header"

function initializeApp() {
  const initialState = window._state
  const store = createReduxStore(initialState)
  const App = (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {getAllRoutes()}
      </BrowserRouter>
    </Provider>
  )
  render(App, document.getElementsByTagName("body")[0])
}

window.onload = initializeApp
