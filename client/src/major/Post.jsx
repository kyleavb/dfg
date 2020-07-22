import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component{

    state = {
        title: '',
        body: ''
    };

    componentDidMount(){
        
        let storyId = this.props.match.params[0];
        axios.get( `/blog/${storyId}` ).then( (ret) => {
            console.log(ret.data)
            this.setState({ 
                title: ret.data.title,
                body: ret.data.body
            })
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
            </div>
        )
    }
}

export default Post;