import ContactJSX from '../contact/contactJSX'; 
import { sendMail } from '../../actions';
import React, { Component } from 'react';


class Contact extends Component {

    state = {
        submitted: false,
        response:{},
        initialValues: { 
        name: "",
        email: "",
        message: ""
        }
    }

    onSubmit = async (data) => {

        const response = await sendMail(data);

        this.setState({
            submitted: true,
            response: response
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
             initialValues={this.state.initialValues} 
             validateInputs={this.validateInputs}
             submitted={this.state.submitted}
             response={this.state.response}
             />
            </>
         )
    }
  
}

export default Contact;
