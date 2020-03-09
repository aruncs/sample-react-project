import {h} from 'preact'
import {Switch, Route} from "react-router-dom"

export function getAllRoutes() {
  return (
    <Switch>
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
    </Switch>
  )
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