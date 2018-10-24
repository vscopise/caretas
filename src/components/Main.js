import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Categoria from './Categoria'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/categoria/:catId' component={Categoria}/>
      </Switch>
    </main>
  )
  
  export default Main
