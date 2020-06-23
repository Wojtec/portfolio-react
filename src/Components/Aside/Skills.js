import React from 'react';


const Skills = (props) =>{
const {title, skills} = props.props;
    return (
        <section>
          <div className="skills">
          <h3>{title}</h3>
          <ul className="skills-container">
                {skills.map((skill)=> {return <li key={skill}>{skill}</li>})}
            </ul>
          </div>
        </section>
    )
}
export default Skills;