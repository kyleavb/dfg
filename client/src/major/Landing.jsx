import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hero from '../minor/hero';
import '../style/landing.scss'
import mainData from '../data/main.json';
class Landing extends Component{

    state={
        heroData: ""
    }

    // const getConfigurableProps = () => ({
    //     showArrows: boolean('showArrows', true, tooglesGroupId),
    //     showStatus: boolean('showStatus', true, tooglesGroupId),
    //     showIndicators: boolean('showIndicators', true, tooglesGroupId),
    //     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    //     showThumbs: boolean('showThumbs', true, tooglesGroupId),
    //     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    //     autoPlay: boolean('autoPlay', true, tooglesGroupId),
    //     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    //     swipeable: boolean('swipeable', true, tooglesGroupId),
    //     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    //     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    //     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    //     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    //     interval: number('interval', 3000, {}, valuesGroupId),
    //     transitionTime: number('transitionTime', 150, {}, valuesGroupId),
    //     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    // });
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
                <Carousel autoplay showThumbs={false}>
                    {heroRender}
                </Carousel>
            </div>
        )
    }
}

export default Landing;