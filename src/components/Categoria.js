import React, { Component} from 'react'
import axios from 'axios'

class Categoria extends Component {
    constructor(props) {
        super(props)

        //let path = this.props.location.pathname
        //const cat = path.substring(path.lastIndexOf('/'))

        this.state = {
            //cat: null,
            catId: null,
            posts: [],
            isLoading: true
        } 
    }

    componentDidMount(){
        this.setState({ 
            isLoading: true 
        })

        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        //var cat_id = this.props.cat_id

        const { catId } = this.props.location.state
        this.setState({catId, catId})
        console.log(catId)
        axios
            .get( url + 'posts/?categories=' + catId )
            .then(res => {
            this.setState({ 
                posts: res.data,
                isLoading: false 
            })
        })
        .catch(error => console.log(error))
    }
    

    render(){
        const { params } = this.props.match
        if ( this.state.isLoading ) {
            return <div>
                <p>params{params.catId}</p>
                        <p>Cargando...</p>
                    </div>
        } else {
            return (
                <div>
                    <h2>{params.catId}</h2>
                    {
                        this.state.posts.map( post => (
                            <p key={post.id}>{post.title.rendered}</p>
                        ))
                    }
                </div>
            )
        }
        

        
        /*const match = this.props.match
        return ( 
            <Route path={`${match.path}/:name`} render= {({match}) =>( 
                <div> <h3> {match.params.name} </h3></div>
            )}/>
        )*/
    }
}
export default Categoria