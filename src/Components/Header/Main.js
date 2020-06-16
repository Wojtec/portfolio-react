import React, { Component } from 'react';
import Image from './Image';


class Header extends Component {
 

    render(){
        const image = this.props.props.image;

        return(
            <div>          
              <Image img = {image }/>
            </div>
        )
    }
}

export default Header;