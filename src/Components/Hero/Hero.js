import React, {Component} from 'react';

import Content from './Content';

class Hero extends Component {


    render() {
        return (
            <section>
                <div className="heroContainer">
                    <Content content={this.props.hero.content}/>
                    <img src={this.props.hero.img} alt="img"/>
                </div>
            </section>
        )
    }

}

export default Hero;