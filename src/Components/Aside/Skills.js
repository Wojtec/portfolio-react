import React from 'react';


const Skills = (props) =>{
const {title, skills} = props.props;
    return (
        <section>
          <div className="skills">
          <h3>{title}</h3>
          <ul className="skills-container">
                {skills.map((skill)=> {return (
                  <div className="skill-container">
                  <img src={skill.img} />
                  <li className="skill" key={skill}>{skill.name}</li>
                  </div>
                
                
                )})}
            </ul>
          </div>
        </section>
    )
}
export default Skills;