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
    fetch_categories() {
        /*const cat_menu = [
            {slug: 'politica'},
            {slug: 'sociedad'},
            {slug: 'internacionales'},
            {slug: 'deportes'},
            {slug: 'economia-2'},
            {slug: 'cultura-y-espectaculos'},
            {slug: 'vida-y-ocio'},
            {slug: 'empresariales'}
        ]*/

          const cat_menu = [
            'politica',
            'sociedad',
            'internacionales',
            'deportes',
            'economia-2',
            'cultura-y-espectaculos',
            'vida-y-ocio',
            'empresariales'
          ]
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        //console.log(cat_menu.includes('deportes2'))
          var categories = []
           
        axios.get( url + 'categories?per_page=100' )
        .then(res =>(
            categories = res.data
            //this.setState({
                //cats: res.data.filter( category => cat_menu.slug.includes(category.slug) )
                ////cats: res.data.filter( category => cat_menu.slug === category.slug )
                //console.log(res.data.map( cat => cat_menu.includes(cat.slug) ))
            //})
        ))
        .catch((error) => console.log(error))
            /*.then (res => (
                this.setState({
                    cats: res.data.filter(category => cat_menu.includes(category.slug))
                })
            )*/
            var {cat, cats} = []
        for(var i=0;i<categories.length; i++){
            if(cat_menu.includes(categories[i])) {
                cats.push(categories[i])
            }
        }
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
        this.fetch_categories()
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
                                state: { catId: section.catId }
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