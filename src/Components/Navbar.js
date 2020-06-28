import React, { Component } from 'react';


class Navbar extends Component {

    render(){
        return(
            <section>
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
            </section>
        )
    }

}

export default Navbar;