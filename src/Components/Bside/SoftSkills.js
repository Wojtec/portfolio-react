import React from 'react';

const SoftSkills = (props) => {
    const {title, skills} = props.props;

    return (
        <section>
              <h3>{title}</h3>
            <div className= "softSkill">
                {skills.map(skill => {return <p key={skill}>{skill}</p>})}
            </div>
        </section>
    )
}
export default SoftSkills;