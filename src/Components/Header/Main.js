import React, { Component } from 'react';
import Image from './Image';
import Content from './Content';

class Header extends Component {
 

    render(){
        const image = this.props.image;

        return(
            <header id="header" className="header">
              <Content/>       
              <Image img = { image }/>
            </header>
        )
    }
}

export default Header;