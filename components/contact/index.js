import ContactJSX from '../contact/contactJSX'; 
import { sendMail } from '../../actions';
import React, { Component } from 'react';

const INITIAL_VALUES = {
    name: "",
    email: "",
    message: ""
}



class Contact extends Component {
    state = {
        submitted: false,
    }

    onSubmit = async (data) => {

        const response = await sendMail(data);
        
        this.setState({
            submitted: response
        });
     }
     
    validateInputs = (values) => {
         const errors = {};
             
             Object.entries(values).forEach(([key]) => {
                 if(!values[key]) {
                     let keyUpper = key[0].toUpperCase() + key.slice(1); 
                     errors[key] = `${keyUpper} is required!`;
                 }    
             });
         
             return errors;
         }

    render(){
        return (
            <>
             <ContactJSX 
             onSubmit={this.onSubmit} 
             initialValues={INITIAL_VALUES} 
             validateInputs={this.validateInputs}
             submitted={this.state.submitted}
             />
            </>
         )
    }
  
}

export default Contact;
