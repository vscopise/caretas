import React, { Component } from 'react'

//import styles from '../assets/styles'
import { 
    Grid
  } from '@material-ui/core'


class PreviewPost extends Component {

    constructor(props) {
        super(props)
        
        this.state = { post: props.post}
    }

    handleClick = (e, post) => {
        e.preventDefault()
        this.props.renderPost(post)
    }

    render() {
        const post = this.state.post

        switch(this.props.size) {
            case 'large': {
                return(
                    <div key={post.id}>
                        {post.title.rendered}
                    </div>
                )
            }
            case 'medium': {
                return(
                    <Grid container spacing={24} onClick={e =>this.handleClick(e, post)} className='content-list'>
                        <Grid item md={4} xs={12}>
                            <img 
                                className='content-list-thumb' 
                                src={post.image_url} 
                                alt={post.title.rendered} 
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <h3 className='content-list-title'>
                                {post.title.rendered}
                            </h3>
                            <div 
                                dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} 
                            />
                        </Grid>
                    </Grid>
                )
            }
            default: {

            }

        }
        

    }
}


class Post extends Component {
    render() {
        const post = this.props.post
        return(
            <div>
                <h1 className='entry-title'>
                    {post.title.rendered}
                </h1>
                <div 
                    className='entry-excerpt'
                    dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} 
                />
                <div className=''>
                    <img 
                        className='content-list-thumb' 
                        src={post.image_url} 
                        alt={post.title.rendered} 
                    />
                </div>
                <div className='entry-meta'></div>
                <div 
                    className='entry-content'
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} 
                />
            </div>
        )
    }
}

export  {Post, PreviewPost}