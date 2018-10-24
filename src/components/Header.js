import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { 
    Grid, Toolbar, Typography
} from '@material-ui/core'


import logoMain from '../assets/logo-home.png'

const sections = [
    {
        link: '/',
        label: 'Inicio'
    },
    {
        link: '/categoria/politica',
        label: 'Política'
    },
    {
        link: '/categoria/sociedad',
        label: 'Sociedad'
    },
    {
        link: '/categoria/internacionales',
        label: 'Internacionales'
    },
    {
        link: '/categoria/deportes',
        label: 'Deportes'
    },
    {
        link: '/categoria/economia',
        label: 'Economía'
    },
    {
        link: '/categoria/cultura',
        label: 'Cultura'
    },
    {
        link: '/categoria/vida-y-ocio',
        label: 'Vida y Ocio'
    },
    {
        link: '/categoria/empresariales',
        label: 'Empresariales'
    },
    {
        link: '/suscripciones',
        label: 'Suscripciones'
    },
    {
        link: '/contacto',
        label: 'Contacto'
    },
  ];

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleString('es-ES', { 
                year: 'numeric', month: 'long', day: 'numeric' 
            })
        }
    }


    render() {
        const styles = this.props.className

        return(
            <div className={styles.header}>
                <Grid container spacing={24}>
                    <Grid item md={3} xs={12} className='logo'>
                            <img src={logoMain} className='logo_img' />
                            <p>Montevideo, {this.state.date}</p>
                    </Grid>
                    <Grid item md={9}  xs={12}>
                        <h2>9</h2>
                    </Grid>
                </Grid>
                <Toolbar variant='dense' className={styles.toolbar}>
                    {sections.map((section) => (
                        <Link to={section.link}>{section.label}</Link>
                    ))}
                </Toolbar>
            </div>
        )
    }
}

export default Header