import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import ProjectInput from '../form/projectInput';
import ProjectDate from '../form/projectDate';
import { Button, Alert } from 'reactstrap';


const validateInputs = (values) => {

 const errors = {};
    
    Object.entries(values).forEach(([key, value]) => {
        if(!values[key]  &&  key !== "endDate") {
            let keyUpper = key[0].toUpperCase() + key.slice(1); 
            errors[key] = `${keyUpper} is required!`;
        }    
    });

    const startDate = values.startDate;
    const endDate = values.endDate;

    if(startDate && endDate && Date.parse(startDate) > Date.parse(endDate)){
        errors.endDate = 'End Date cannot be before start date!';

    }

    return errors;
}

const INITIAL_VALUES = { 
                            title: '', 
                            description: '',
                            startDate: '',
                            endDate: '',
                        }

const ProjectForm = (props) => {

    return(
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
        validate={validateInputs}
        onSubmit={props.onSubmit}
        >
        {({ isSubmitting }) => (
            <Form>
                <Field 
                    className="form-control" 
                    type="text" 
                    name="title" 
                    label="Title"
                    component={ProjectInput} />
                <Field 
                    className="form-control" 
                    type="textarea" 
                    name="description" 
                    label="Description" 
                    component={ProjectInput} />
                <Field 
                    name="startDate"
                    label="Start Date" 
                    component={ProjectDate} />
                <Field 
                    name="endDate" 
                    label="End Date"
                    canBeDisabled={true}
                    component={ProjectDate} />
                {props.error && <Alert color="danger">
                    {props.error}
                </Alert>}
                <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
            </Form>
        )}
    </Formik>
  </div>
    )
};

export default ProjectForm;
