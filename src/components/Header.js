import React, { Component } from 'react'
import axios from 'axios'
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
        catId: null,
        link: '/categoria/sociedad',
        label: 'Sociedad'
    },
    {
        id: 4,
        catId: null,
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
        catId: null,
        link: '/categoria/economia',
        label: 'Economía'
    },
    {
        id: 7,
        catId: null,
        link: '/categoria/cultura',
        label: 'Cultura'
    },
    {
        id: 8,
        catId: null,
        link: '/categoria/vida-y-ocio',
        label: 'Vida y Ocio'
    },
    {
        id: 9,
        catId: null,
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
    get_categories() {
        const cat_menu = [
            'politica',
            'sociedad',
            'internacionales',
            'deportes',
            'economia',
            'cultura',
            'vida-y-ocio',
            'empresariales'
          ]
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        console.log(url)

        return axios.get( url + 'categories?categories_per_page=100' )
            .then (res => (
                res.data.filter(category => cat_menu.includes(category.slug))
            ))
    }

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

        //const categories = cat_menu
        const categories = this.get_categories()
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
                                    catId: section.catId
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