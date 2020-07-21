import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavItem from '../minor/NavItem'
import menuData from '../data/main'
import '../style/nav.scss'

class NavBar extends Component {
    render() {
        let navMax = menuData.nav.length - 1;
        let navBar = menuData.nav.map( (navInfo , i) => {
            let add = null;
            
            if(i !== navMax ){
                add = <div key={`vert${i}`} className="vert"></div>
            }
            return(
                <div key={`butt${i}`} className="fullButton">
                    <NavItem key={i} nav={navInfo} spec={i} max={navMax} />
                    {add}
                </div>
            )
        })
        
        return(
            <div className="navContainer">
                <div className="logoContainer">
                    <hr />    
                    <Link to='/'>
                        <div className="navLogo">
                                <span>The</span>
                                <h1>Disney Field Guide</h1>
                                <br/>
                        </div>  
                    </Link>
                    <span className="logoTag">Now with more guide!</span>
                    <hr />
                </div>
                <div className="navBar">
                    {navBar}
                </div>
            </div>
        )
    }
}
export default NavBar;