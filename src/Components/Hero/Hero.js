import React, {Component} from 'react';
import Content from './Content';
class Hero extends Component {
    render() {
        return (
            <header>
                <div className="heroContainer">
                    <Content content={this.props.hero.content}/>
                    <img className="heroImg" src='./hero.jpg' alt="img"/>
                </div>
            </header>
        )
    }

}

export default Hero;