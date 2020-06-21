import React, { Fragment } from 'react';


const Experience = (props) =>{
    const {title, name, school, date, content} = props.props;
    console.log(props.props.date);
     const {title_project, property_app, scraping_data, music_library, custom_blog, portfolio} = props.props.projects;

    return (
        <Fragment>
        <section>
            <h3>{title}</h3> 
        <div className="experienceContent">
            <p>{date} - {school}</p>
            <p><strong>{name}</strong></p>
            <p>{content}</p>
        </div>
        </section>
        <section>
        <h3>{title_project}</h3>
        <div className= "projects">
            <p><strong>The real estate: </strong>{property_app}</p>
            <p><strong>Scraping data maker:</strong> {scraping_data}</p>
            <p><strong>Music Library:</strong> {music_library}</p>
            <p><strong>Custom Blog:</strong> {custom_blog}</p>
            <p><strong>Portfolio:</strong> {portfolio}</p>
        </div>
        </section>
        </Fragment>

    )
}
export default Experience;