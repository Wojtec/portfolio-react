import React, { Component } from "react";

import Profile from './Profile';
import Contact from "./Contact";
import Language from './Languages';
import Skills from './Skills';


class Aside extends Component {

    render(){
        const profile = this.props.aside[0];
        const contact = this.props.aside[1];
        const languages = this.props.aside[2];
        const skills = this.props.aside[3];

        return (
            <aside  className="aside">
            <Profile props = { profile }/>
            <Contact props = { contact }/>
            <Language props = { languages }/>
            <Skills props = { skills }/>
            </aside>
        )
    }
}
export default Aside;