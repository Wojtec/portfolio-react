import React, { Component } from 'react';

import ButtonPDF from './ButtonPDF';

class IconBar extends Component {
    state = {
        icons: this.props.icons,
    }
    render(){
        return(
            <section>
                <div>
                    {this.state.icons.map(icon =>{
                        return <img src=''  alt="img"/>
                    })}
                </div>
                <ButtonPDF/>
            </section>
        )
    }



}
export default IconBar;