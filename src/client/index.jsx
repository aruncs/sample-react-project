import { h, render } from "preact"
import { getAllRoutes } from "../app/routes"
import { BrowserRouter } from "react-router-dom"
import Header from "../app/components/header"

function initializeApp() {
  const App = (
    <BrowserRouter>
      <Header />
      {getAllRoutes()}
    </BrowserRouter>
  )
  render(App, document.getElementsByTagName("body")[0])
}

window.onload = initializeApp
