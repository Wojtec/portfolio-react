import React from 'react';

const SoftSkills = (props) => {
    const {title, skills} = props.props;

    return (
        <section>
            <div className= "softSkill">
            <h3>{title}</h3>
                {skills.map(skill => {return <p key={skill}>{skill}</p>})}
            </div>
        </section>
    )
}
export default SoftSkills;