import {Row, Col, Container, Button} from 'reactstrap';
import {Formik, Form, Field} from 'formik';
import ProjectInput from '../form/projectInput';

const contactJSX = (props) => {
    const {onSubmit, initialValues, validateInputs, submitted, response:{name, response}} = props;
    return (
        <section id="contact" className="background-skills">
            <Container>
                <div className="contact">
                    <div className="title-wrapper">
                        <div className="title-container">
                            <span className="title-container-decoration"></span>
                            <div className="title-container-context">
                                <h2>
                                    <span className="title-container-text">Contact</span>
                                </h2>
                                <p>Send me a message.</p>
                            </div>
                            <span className="title-container-decoration"></span>
                        </div>
                    </div>
                    {submitted ? 
                        <div className="contact-submitted">
                            <span className="contact-submitted-text">
                                 Thank you so much {name}.
                            </span>
                            <p>I will answer you soon as possible.</p>
                        </div>
                    :
                    <div className="form-wrapper">
                    <Formik initialValues={initialValues} validate={validateInputs} onSubmit={onSubmit}>
                        {
                            ({isSubmitting}) => (
                                <Form>
                                    <Field
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        label="Name"
                                        component={ProjectInput}/>
                                    <Field
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        label="Email"
                                        component={ProjectInput}/>
                                    <Field
                                        className="form-control"
                                        type="textarea"
                                        name="message"
                                        label="Message"
                                        component={ProjectInput}/>
                                    <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                                        Submit
                                    </Button>
                                </Form>
                            )
                        }
                    </Formik>
                    </div>
                    }
                </div>
            </Container>
        </section>
    )
}

export default contactJSX;