import React, { Component } from 'react';

class Image extends Component {
    state = {
        img: this.props.img
    }
 
    image = ()=>{
        return(
            <img src={this.state.img} className="photo" alt="img"/>
                    
                
        )
    }
    render(){
        return(
            <div className="image">

            {this.state.img !== 0 && this.image() }
            </div>

        )
    }
}
export default Image;