import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class StoryBlock extends Component{
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <Link to={`/story/${this.props.post.id}`}>
                    <h3>{this.props.post.title}</h3>
                </Link>
            </div>
        )
    }
}

export default StoryBlock;