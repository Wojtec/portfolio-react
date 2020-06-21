import React, { Component } from 'react';

class Content extends Component {
   
    componentDidMount = async() => {
        this.animation();
    }

    animation = async ()=>{
        const ele = document.getElementById("content");
        ele.style.fontSize = 0 + "px";
        console.log(ele);
        let size = 0;
        let frame = ()=>{
            if(size == 36 ){
                clearInterval(id);
            }else{
                size++;
                ele.style.fontSize = size + "px";
            }
    
        }
        let id = setInterval(frame, 1);
       
    }
 
    render(){

        return(
            <div id="content" className="content">Junior Web Developer</div>
        )
    }
}
export default Content;