import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faBars,

  } from "@fortawesome/free-solid-svg-icons";
class Navbar extends Component {
burger = () =>{
    let navbarContainer = document.querySelector('.navbarContainer');
    if(navbarContainer.style.display === "flex"){
        navbarContainer.style.display = "none";
    } else {
        navbarContainer.style.display ="flex";
    }
}
    render(){
        return(
            <nav className="navbar">
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
            </nav>
        )
    }

}

export default Navbar;