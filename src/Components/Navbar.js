import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faBars,

  } from "@fortawesome/free-solid-svg-icons";

import Media from './Media';
 
class Navbar extends Component {
burger = () =>{
    let navbarContainer = document.querySelector('.navbarContainer');
    let center = document.querySelector('.center');
    if(navbarContainer.style.display === "block"){
        navbarContainer.style.display = "none";
        center.style.display = "flex";
    } else {
        navbarContainer.style.display ="block";
        center.style.display = "block";
    }
}
    render(){
        return(
            <nav className="navbar">
            <div className="center">
            <a className="logo">Poninski</a>
                <div className="navbarContainer" >
                        <a className="navAbout">
                            About
                        </a>
                        <a className="navProjects">
                            Projects
                        </a>
                        <a className= "navContact">
                            Contact
                        </a>
                </div>
       
                <a className="navbarIcon" onClick={()=>{this.burger()}}>
                <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
                <Media/>
            </nav>
        )
    }

}

export default Navbar;