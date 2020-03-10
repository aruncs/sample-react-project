import { h } from "preact"
import renderToString from "preact-render-to-string"
import { StaticRouter } from "react-router-dom"
import { getAllRoutes } from "../../app/routes"
import Header from "../../app/components/header"
export default function viewHandler(req, res, next) {
  const App = (
    <StaticRouter location={req.url}>
      <Header />
      {getAllRoutes()}
    </StaticRouter>
  )
  const content = renderToString(App)
  const { resources, store } = res
  const { scripts, links } = resources
  const state = JSON.stringify(store.getState())

  res.render("index", {
    content,
    scripts,
    links,
    state
  })
}
