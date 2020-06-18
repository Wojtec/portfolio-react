import React, { Component } from 'react';

class Image extends Component {

    render(){
        return(
            <div className="image">
            <img src={this.props.img} className="photo" alt="img"/>

            </div>
        )
    }
}
export default Image;