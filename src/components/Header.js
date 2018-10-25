import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
    Grid, Toolbar
} from '@material-ui/core'


import logoMain from '../assets/logo-home.png'

const sections = [
    {
        id: 1,
        catId: null,
        link: '/',
        label: 'Inicio'
    },
    {
        id: 2,
        catId: 7,
        link: '/categoria/politica',
        label: 'Política'
    },
    {
        id: 3,
        catId: 43,
        link: '/categoria/sociedad',
        label: 'Sociedad'
    },
    {
        id: 4,
        catId: 11,
        link: '/categoria/internacionales',
        label: 'Internacionales'
    },
    {
        id: 5,
        catId: 14,
        link: '/categoria/deportes',
        label: 'Deportes'
    },
    {
        id: 6,
        catId: 44,
        link: '/categoria/economia',
        label: 'Economía'
    },
    {
        id: 7,
        catId: 50,
        link: '/categoria/cultura',
        label: 'Cultura'
    },
    {
        id: 8,
        catId: 27,
        link: '/categoria/vida-y-ocio',
        label: 'Vida y Ocio'
    },
    {
        id: 9,
        catId: 26,
        link: '/categoria/empresariales',
        label: 'Empresariales'
    },
    {
        id: 10,
        catId: null,
        link: '/suscripciones',
        label: 'Suscripciones'
    },
    {
        id: 11,
        catId: null,
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
            }),
        }
    }

    render() {
        const styles = this.props.className

        return(
            <div className={styles.header}>
                <Grid container spacing={24}>
                    <Grid item md={3} xs={12} className='logo'>
                            <img src={logoMain} className='logo_img' alt='Caras y Caretas' />
                            <p>Montevideo, {this.state.date}</p>
                    </Grid>
                    <Grid item md={9}  xs={12}>
                        <h2>9</h2>
                    </Grid>
                </Grid>
                <Toolbar variant='dense' className={styles.toolbar}>
                    {sections.map((section) => (
                        <Link 
                            key={section.id} 
                            to={{
                                pathname: section.link,
                                state: { 
                                    catId: section.catId,
                                    catTitle: section.label 
                                }
                            }}
                        >
                            {section.label}
                        </Link>
                    ))}
                </Toolbar>
            </div>
        )
    }

}

export default Header