import {h} from "preact"
import renderToString from "preact-render-to-string"
import {StaticRouter} from "react-router-dom"
import {getAllRoutes} from '../../app/routes'
export default function viewHandler(req, res, next) {

  const App = (
    <StaticRouter location={req.url}>
      {getAllRoutes()}
    </StaticRouter>
  )
  const content = renderToString(App)
  const {resources, store} = res
  const {scripts} = resources
  const state = JSON.stringify(store.getState())
  
  res.render("index",{
    content,
    scripts,
    state
  })
}