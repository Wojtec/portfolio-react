import React, { Component } from 'react';

import Experience from './Experience';
import Education from './Education';
import SoftSkill from './SoftSkills';

class Bside extends Component {
    render(){
        const experience = this.props.bside[0];
        const education = this.props.bside[1];
        const softSkill = this.props.bside[2];

        return (
            <main className="bside">
                <Experience props = { experience }/>
                <Education props = { education }/>
                <SoftSkill props = { softSkill }/>
            </main>
        )
    }
}
export default Bside;