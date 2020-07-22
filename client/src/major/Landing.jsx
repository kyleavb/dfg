import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hero from '../minor/hero';
import '../style/landing.scss'
import mainData from '../data/main';
class Landing extends Component{

    state={
        heroData: ""
    }

    
    componentDidMount(){
        //To be replaced by either API call OR grab data from context
        this.setState({ heroData: mainData.hero});
    }

    renderHero = () => {
        let heroCollection = []
        this.state.heroData.forEach(( item, i) => {
            heroCollection.push(<Hero key={i} heroData={item} slide={i}/>)
        });
        return heroCollection
    }

    render(){
        let heroRender = this.state.heroData ? this.renderHero() : [];
        return(
            <div className="landingMain">
                <Carousel 
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    showThumbs={false}
                >
                    {heroRender}
                </Carousel>

            </div>
        )
    }
}

export default Landing;