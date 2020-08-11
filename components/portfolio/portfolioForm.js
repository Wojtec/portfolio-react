import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PortfolioInput from '../form/portfolioInput';
import PortfolioDate from '../form/portfolioDate';
import { Button } from 'reactstrap';


const validateInputs = (values) => {
 const errors = {};
    
    Object.entries(values).forEach(([key, value]) => {
        if(!values[key]  &&  key !== "startDate" && key !== "endDate") {
            let keyUpper = key[0].toUpperCase() + key.slice(1); 
            errors[key] = `${keyUpper} is required!`;
        }    
    });

    const startDate = values.startDate;
    const endDate = values.endDate;

    if(startDate && endDate && (Date.parse(startDate) > Date.parse(endDate))){
        errors.endDate = 'End Date cannot be before start date!';

    }

    return errors;
}

const INITIAL_VALUES = { 
                            title: '', 
                            company: '', 
                            location: '', 
                            position: '',
                            description: '',
                            startDate: '',
                            endDate: '',
                        }

const PortfolioForm = (props) => (
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
                    component={PortfolioInput} />
                <Field 
                    className="form-control" 
                    type="text" 
                    name="company"
                    label="Company" 
                    component={PortfolioInput} />
                <Field 
                    className="form-control" 
                    type="text" 
                    name="location" 
                    label="Location"
                    component={PortfolioInput} />
                <Field 
                    className="form-control" 
                    type="text" 
                    name="position" 
                    label="Position"
                    component={PortfolioInput} />
                <Field 
                    className="form-control" 
                    type="textarea" 
                    name="description" 
                    label="Description" 
                    component={PortfolioInput} />
                <Field 
                    name="startDate"
                    label="Start Date" 
                    component={PortfolioDate} />
                <Field 
                    name="endDate" 
                    label="End Date"
                    canBeDisabled={true}
                    component={PortfolioDate} />
              
                <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
            </Form>
        )}
    </Formik>
  </div>
);

export default PortfolioForm;
