import React, {Component} from 'react';

class Content extends Component {
    state = {
        content: this.props.content
    }
    title = () => {
        let content = this.state.content;
        content.split(/[\s,]+/);
        let cont = [...content];
        let top = 50;
        let left = 50;

        return (
    cont.map((leter, index) => { 

        if(index <= 0 && index >= 3  ){

            top += 50;
            left += 50;
            let tt = leter += "\n";
            console.log(index);
            
           return <p style={{top: top, left: left }}>{tt}</p> 
        }
        if(index >= 3 && index <= 6 )
        top += 50;
        left += 50;
        let tt = leter += "\n";
        console.log(index);
        
       return <p style={{top: top, left: left }}>{tt}</p> 
    })

        )

    }
    render() {
        return (
            <div>
                {this.title()}
            </div>
        )
    }
}
export default Content;