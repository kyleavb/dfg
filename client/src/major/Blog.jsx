import React, { Component } from 'react';
import axios from 'axios';
import StoryBlock from '../minor/StoryBlock';

class Blog extends Component{
    state = {
        blogData: null
    }
    componentDidMount(){
        axios.get( '/blog' ).then( ret => {
            if( ret.data.length > 0 ){
                this.setState( {blogData: ret.data} )
            }else{
                console.log('shit')
            }
        })
    }

    mapStories = () => {
        return this.state.blogData.map( (item, i) => {
            return <StoryBlock key={i} post={item}/>
        })
    }

    render(){

        let mappedBlog = this.state.blogData ? this.mapStories() : <p>We are Sorry, but we cannot seem to find anything to put here.</p>;
        return(
            <div>
                <h1>Blog Stuff</h1>
                <p>Filter Items here</p>
                {mappedBlog}
            </div>
        )
    }
}

export default Blog;