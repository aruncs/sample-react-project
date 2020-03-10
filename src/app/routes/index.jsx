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
      <Route exact path='/career'>
        <Career/>
      </Route>
    </Switch>
  )
}


function Home() {
  return (
    <div>
      Home Content
    </div>
  )
}


function About() {
  return (
    <div>
      About Content
    </div>
  )
}

function Career() {
  return (
    <div>
      Career Content
    </div>
  )
}