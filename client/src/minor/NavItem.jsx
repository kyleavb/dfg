import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class NavItem extends Component {

    createMenu = ( list ) => {        
        if( list ){
            let mapped = list.map( (item, i) => {
                return <Link className="subMenuItem" key={i} to={item.loc}>{item.title}</Link>
            })
            return(
                <div  className="subMenu hide" id="subMenu">
                    {mapped}
                </div>
            )
        }else{
            // place holder for special handling on no sub menu
        }
    };

    mouseEnter = (e) => {
        if( e.currentTarget.children.namedItem('subMenu') ){
            e.currentTarget.children.namedItem('subMenu').classList.remove('hide')
        }
    }

    mouseLeave = (e) => {
        if( e.currentTarget.children.namedItem('subMenu') ){
            e.currentTarget.children.namedItem('subMenu').classList.add('hide')
        }
    }

    render() {
        let subNav = this.createMenu( this.props.nav.menu)

        return(
            <div onMouseOver={this.mouseEnter} onMouseOut={this.mouseLeave} className="navItemContainer">
                <Link className='navButton' to={this.props.nav.loc ? this.props.nav.loc : '/' }>
                    <div>
                        <span>{this.props.nav.title}</span>
                    </div>
                </Link>
                {subNav}
            </div>
        )
    }
}
export default NavItem;