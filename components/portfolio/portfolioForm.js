import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PortfolioInput from '../form/portfolioInput';
import PortfolioDate from '../form/portfolioDate';


const validateInputs = (values) => {
 const errors = {};
    
    Object.entries(values).forEach(([key, value]) => {
        if(!values[key]  &&  key !== "startDate" && key !== "endDate") {
            errors[key] = `${key} is required!`;
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

const PortfolioForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
        validate={validateInputs}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
        }}
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
              
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
            </Form>
        )}
    </Formik>
  </div>
);



export default PortfolioForm;








// export default class PortfolioForm extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '',
//             description: '',
//             language: '',
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         const field = event.target.name;
//         this.setState({[field]: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('A name was submitter:' + this.state.value + ' ' + this.state.description + ' ' + this.state.language );
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input name="value" type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <label>
//                     Text:
//                     <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//                 </label>
//                 <label>
//                     Select language:
//                     <select name="language" value={this.state.language} onChange={this.handleChange }>
//                         <option value="JavaScript">JavaScript</option>
//                         <option value="PHP">PHP</option>
//                         <option value="Python">Python</option>
//                         <option value="C++">C++</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }
// }