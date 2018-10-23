import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Page from './Page'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/page' component={Page}/>
      </Switch>
    </main>
  )
  
  export default Main
