import React from 'react';


const Experience = (props) =>{
    const {title, name, school, date, content} = props.props;
    console.log(props.props.date);
     const {title_project, property_app, scraping_data, music_library, custom_blog, portfolio} = props.props.projects;

    return (
        <section>
            <h3>{title}</h3> 
        <div className="experienceContent">
            <p>{name}</p>
            <p>{school} {date}</p>
            <p>{content}</p>
        </div>
        <h3>{title_project}</h3>
        <div className= "projects">
            <p>The real estate: {property_app}</p>
            <p>Scraping data maker: {scraping_data}</p>
            <p>Music Library: {music_library}</p>
            <p>Custom Blog: {custom_blog}</p>
            <p>Portfolio: {portfolio}</p>
        </div>
        </section>
    )
}
export default Experience;