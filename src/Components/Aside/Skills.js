import React from 'react';


const Skills = (props) =>{
const {title, skills} = props.props;
    return (
        <section>
          <h3>{title}</h3>
          <div>
          <ul className="skills">
                {skills.map((skill)=> {return <li key={skill}>{skill}</li>})}
            </ul>
          </div>
        </section>
    )
}
export default Skills;