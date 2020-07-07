import React, { Component } from 'react';
import Image from './Image';
import Content from './Content';

class Header extends Component {
 

    render(){
        const image = this.props.image;

        return(
            <section id="header" className="header">
              <Content/>       
              <Image img = { image }/>
            </section>
        )
    }
}

export default Header;