import React from 'react';


const Experience = (props) =>{
    const {title, name, school, date, content} = props.props;
    console.log(props.props.date);
     const {property_app, scraping_data, music_library, custom_blog, portfolio} = props.props.projects;

    return (
        <section>
        <div>
            {title}
            <p>{name}</p>
            <p>{school}</p>
            <p>{date}</p>
            <p>{content}</p>
        </div>
        <div>
            Projects:
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