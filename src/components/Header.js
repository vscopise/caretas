import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { 
    Grid, Toolbar, Typography
} from '@material-ui/core'


import logoMain from '../assets/logo-home.png'

const sections = [
    'Inicio',
    'Política',
    'Sociedad',
    'Internacionales',
    'Deportes',
    'Economía',
    'Cultura',
    'Vida y Ocio',
    'Empresariales',
    'Suscripciones',
    'Contacto'
  ];

class Header extends Component {
    render() {
        const styles = this.props.className

        return(
            <div className={styles.header}>
                <Grid container spacing={24}>
                    <Grid item md={4} xs={12} className='logo'>
                            <img src={logoMain} className='logo_img' />
                    </Grid>
                    <Grid item md={8}  xs={12}>
                        <h2>9</h2>
                    </Grid>
                </Grid>
                <Toolbar variant='dense' className={styles.toolbar}>
                    <Link to='/'>Home</Link>
                    <Link to='/page'>Page</Link>
                </Toolbar>
            </div>
        )
    }
}

export default Header