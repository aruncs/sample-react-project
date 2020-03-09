import {h, render} from 'preact'
import {getAllRoutes} from '../app/routes'
import {BrowserRouter} from 'react-router-dom'

function initializeApp() {
  const App = (
    <BrowserRouter>
      {getAllRoutes()}
    </BrowserRouter>
  )
  render(document.getElementsByTagName('body')[0], App)
}

window.onload = initializeApp
