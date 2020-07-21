import React, { Component } from 'react';

class Hero extends Component{
    componentDidMount(){

    }
    render(){
        console.log()
        return(
            <div className={`hero slide${this.props.slide}`}>
                <img className="heroImg" src={this.props.heroData.img}></img>
                <div className="heroText">
                    <span className="heroTitle">{this.props.heroData.title}</span>
                    <span className="heroByLine">{this.props.heroData.by}</span>
                </div>
            </div>
        )
    }
}

export default Hero;