import {h} from "preact"
import renderToString from "preact-render-to-string"
import {StaticRouter, Switch, Route} from "react-router-dom"
export default function viewHandler(req, res, next) {

  const App = (
    <StaticRouter location={req.url}>
      <Switch>
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      </Switch>
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


function Home() {
  return (
    <div>
      Home
    </div>
  )
}


function About() {
  return (
    <div>
      About
    </div>
  )
}