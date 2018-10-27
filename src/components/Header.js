import React, { Component } from 'react'
import { 
    Grid
} from '@material-ui/core'


import logoMain from '../assets/logo-home.png'


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


        if(this.state.windowWidth <= 1080) {
        } else {
            return(
                    <Grid container spacing={24}>
                        <Grid item md={3} xs={12} className='logo'>
                                <img src={logoMain} className='logo_img' alt='Caras y Caretas' />
                                <p>Montevideo, {this.state.date}</p>
                        </Grid>
                        <Grid item md={9} xs={12}>
                            <h2>9</h2>
                        </Grid>
                    </Grid>
            )
        }
    }

}

export default Header