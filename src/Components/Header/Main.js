import React, { Component } from 'react';
import Image from './Image';
import Content from './Content';

class Header extends Component {
 

    render(){
        const image = this.props.image;

        return(
            <header>          
              <Image img = { image }/>
              <Content/>
            </header>
        )
    }
}

export default Header;