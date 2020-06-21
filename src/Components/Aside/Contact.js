import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) =>{
   const {title, phone, email, linkedIn, github, city} = props.props;
    return (
        <section>
       <h3>{title}</h3>
        <div className="contact">
        <p>City: {city}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
       <p>LinkedIn: <a href = {linkedIn}> {linkedIn} </a></p>
       <p>Github: <a href ={github}> {github} </a></p>
        </div>
        </section>
    )
}

export default Contact;