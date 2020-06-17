import React from 'react';

const SoftSkills = (props) => {
    const {title, skills} = props.props;

    return (
        <section>
            <div>
                {title}
                {skills.map(skill => {return <p key={skill}>{skill}</p>})}
            </div>
        </section>
    )
}
export default SoftSkills;