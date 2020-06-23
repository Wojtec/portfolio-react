import React from 'react';

const Contact = (props) =>{
   const {title, phone, email, linkedIn, github, city, portfolio} = props.props;
    return (
        <section>
        <div className="contact">
        <h3>{title}</h3>
        <p>City: {city}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Portfolio: <a href={portfolio}>{portfolio}</a></p>
        <p>LinkedIn: <a href = {linkedIn}> {linkedIn} </a></p>
        <p>Github: <a href ={github}> {github} </a></p>
        </div>
        </section>
    )
}

export default Contact;