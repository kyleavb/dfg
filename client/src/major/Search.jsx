import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component{

    state = {
        title: '',
        body: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post( '/test/1', this.state).then( (data) => {
            console.log(data)
        })
    };

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>title: 
                        <input name="title" onChange={this.onChange} type="text"></input>
                    </label>
                    <label>Body: 
                        <input name="body" onChange={this.onChange} type="text"></input>
                    </label>
                    < br/>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }
}

export default Search;