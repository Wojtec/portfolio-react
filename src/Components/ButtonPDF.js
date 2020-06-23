import React, { Component } from 'react';
import genPDF from '../Services/pdfConvertor';



class Button extends Component {

    getPDF = async ()=> {
        await genPDF();
    }


render(){
    return(
        <div>
            <button onClick={()=>this.getPDF()}>Version PDF!</button>
        </div>
    )
}



}
export default Button;