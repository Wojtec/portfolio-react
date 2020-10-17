import ContactJSX from '../contact/contactJSX'; 

const INITIAL_VALUES = {
    name: "",
    email: "",
    message: ""
}

const onSubmit = (data) => {
    
    console.log(data);
}

const validateInputs = (values) => {
    const errors = {};
        
        Object.entries(values).forEach(([key]) => {
            if(!values[key]) {
                let keyUpper = key[0].toUpperCase() + key.slice(1); 
                errors[key] = `${keyUpper} is required!`;
            }    
        });
    
        return errors;
    }

const Contact = () => {
    return (
       <>
        <ContactJSX 
        onSubmit={onSubmit} 
        initialValues={INITIAL_VALUES} 
        validateInputs={validateInputs}
        />
       </>
    )
}

export default Contact;
