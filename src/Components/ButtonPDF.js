import React, { Component } from 'react';
import genPDF from '../Services/pdfConvertor';



class Button extends Component {

    getPDF = () => {
         genPDF();
    }


render(){
    return(
        <div>
            <button onClick={()=>this.getPDF()} data-html2canvas-ignore="true">Version PDF!</button>
        </div>
    )
}



}
export default Button;