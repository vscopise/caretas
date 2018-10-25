import React, { Component} from 'react'
import axios from 'axios'

class Categoria extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catId: null,
            posts: [],
            isLoading: true
        } 
    }

    fetch_posts = (catId) => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
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

    componentDidMount(){
        this.setState({ 
            isLoading: true 
        })

        //const { catId } = this.props.match.params
        const { catId } = this.props.location.state
        this.fetch_posts(catId)

        //const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        //var catId = this.props.catId

        //const { catId } = props.location.state
        //this.setState({catId, catId})
        //console.log(catId)
        /*axios
            .get( url + 'posts/?categories=' + catId )
            .then(res => {
            this.setState({ 
                posts: res.data,
                isLoading: false 
            })
        })
        .catch(error => console.log(error))*/
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
          const { catId } = nextProps.location.state
          this.fetch_posts(catId)
        }
    }
    

    render(){

        const { catId } = this.props.location.state
        
        if ( this.state.isLoading ) {
            return <div>
                        <p>Cargando...</p>
                    </div>
        } else {
            return (
                <div>
                    <h2>{catId}</h2>
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