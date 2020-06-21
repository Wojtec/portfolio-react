import React, { Component } from 'react';


class Icon extends Component {
    state = {
        icons: this.props.icons,
        iconsLeft: [],
        iconsRight: [],
    }
    componentDidMount = async () =>{
        if(this.state.icons.length != 0){
            this.fadeIn();

        }
    }

    images = () =>{
        let icons = this.state.icons;
        let num = 0;

        return (
            icons.map((icon) => { 
                let top = Math.floor(Math.random() * (Math.floor(1300) - Math.ceil(100)) + Math.ceil(100));
                let right = Math.floor(Math.random() * (Math.floor(350) - Math.ceil(50)) + Math.ceil(50));
                let tt = num % 2;
                   
                        if(tt === 1){
                            num++;

                            return( <img key={icon} className="icon" id={icon} width="200px" height="200px" style={{
                            top:top + 'px',
                            right: right + 'px',
                            }} src={icon} alt="img"></img>
                            )

                        }
    
                        if(tt === 0){
                            num++;

                            return <img key={icon} className="icon" id={icon} width="200px" height="200px" style={{
                                top:top + 'px',
                                left: right + 'px',
                                }} src={icon} alt="img"></img>
                                
                        }

            })
            
        )
        
    }


    fadeIn = () =>{
        const icon = document.getElementsByClassName('icon');
        const randomEle = Math.floor(Math.random() * icon.length);
            let op = 0.1;
            let lot =  icon[randomEle];
              console.log("rand", randomEle);
            
                let inter = window.setInterval(()=>{
                    lot.style.display = 'block';
        
                    if(op >= 1.0){
                        clearInterval(inter);
                        let opt = 1.0;
                        let nex = window.setInterval(() =>{
                            if(opt <= 0.01){
                                clearInterval(nex);
                                lot.style.display = 'none';
                                this.fadeIn();
                            }
                            lot.style.opacity = opt;
                            lot.style.filter = 'alpha(opacity=' + opt * 100 + ")";
                            opt -= opt * 0.1;
                        },50)
                    }
                    lot.style.opacity = op;
                    lot.style.filter = 'alpha(opacity=' + op * 100 + ")";
                    op += op * 0.1;
        
                    },50)    
    }
  

    render(){
            return(
                <section id="wrapper" className="wrapper">
                    {this.state.icons.length !== 0 &&  this.images()}
                </section>
            )
        
       
    }

}
export default Icon;