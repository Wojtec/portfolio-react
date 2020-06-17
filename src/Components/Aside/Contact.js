import React from 'react';

const Contact = (props) =>{
   const {title, phone, email, linkedIn, github} = props.props;
    return (
        <section>
        <div className="contact">
        {title}
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>LinkedIn: {linkedIn}</p>
        <p>Github: {github}</p>
        </div>
        </section>
    )
}

export default Contact;