import React, {Component, Fragment} from 'react';
class Content extends Component {

    content = () => {
        let content = this.props.content;
        let cont = [...content];
        let hi = "";
        let myName = "";
        let im = "";

        cont.map((leter, index) => {
            if (index >= 0 && index <= 2) {
                return hi += leter;
            }
            if (index >= 2 && index <= 21) {
                return myName += leter;
            }
            if (index >= 21 && index <= 48) {
                return im += leter;
            }
        })

        return (
            <Fragment>
                <div className="hi">{hi}</div>
                <div className="myName">{myName}</div>
                <div className="im">{im}</div>
            </Fragment>)

    }

    render() {
        return (
            <div className="contentContainer">
                {this.content()}
            </div>
        )
    }
}
export default Content;