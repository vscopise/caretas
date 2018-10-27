import React, { Component, Fragment } from 'react'

import { 
  CssBaseline,
  Grid,
  withStyles
} from '@material-ui/core'

import 'typeface-pt-serif'
import 'typeface-oswald'

import styles from './assets/styles'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {

  render() {
    const {classes} = this.props

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <div className={styles.header}>
              <Header className={classes} />
              <Navbar className={styles.navbar} />
          </div>
            <Grid container spacing={24}>
              <Grid item md={8} xs={12}>
                <Main />
              </Grid>
              <Grid item md={4} xs={12}>Sidebar</Grid>
            </Grid>
            
            <Footer />
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)
