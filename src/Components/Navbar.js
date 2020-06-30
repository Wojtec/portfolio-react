import React, { Component } from 'react';


class Navbar extends Component {

    render(){
        return(
            <nav>
                <div className="navbar">
                    <ul>
                        <li>
                            About
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;