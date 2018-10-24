import React, { Component} from 'react'
import { Link, Route } from 'react-router-dom'
import axios from 'axios'

class Categoria extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isLoading: true
        } 
    }

    componentWillMount(){
        let path = this.props.location.pathname
        const cat = path.substring(path.lastIndexOf('/'))


        axios
            .get( 'https://www.carasycaretas.com.uy/wp-json/wp/v2/posts/?categories' + cat )
            .then(res => {
            this.setState({ 
                posts: res.data,
                isLoading: false 
            })
        })
        .catch(error => console.log(error))
    }
    

    render(){
        const match = this.props.match
        return ( 
            <Route path={`${match.path}/:name`} render= {({match}) =>( 
                <div> <h3> {match.params.name} </h3></div>
            )}/>
        )
    }
}
export default Categoria