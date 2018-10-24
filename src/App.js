import React, { Component, Fragment } from 'react'

import { 
  CssBaseline,
  withStyles
} from '@material-ui/core'

import 'typeface-pt-serif'
import 'typeface-oswald'

import styles from './assets/styles'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {

  render() {
    const {classes} = this.props

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
            <Header className={classes} />
            <Main />
            <Footer />
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)
