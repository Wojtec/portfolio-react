import {Row, Col, Container, Button} from 'reactstrap';
import {Formik, Form, Field} from 'formik';
import ProjectInput from './form/projectInput';

const Contact = ({onSubmit, initialValues}) => {
    return (
        <section className="section-contact">
            <Container>
                <div className="contact">
                    <h2 className="title">
                        <span className="title-decoration"></span>
                        <span className="title-text">Contact</span>
                        <span className="title-decoration"></span>
                        <span className="title-decoration-long"></span>
                    </h2>
                    <Formik initialValues={initialValues} validate='' onSubmit={onSubmit}>
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
            </Container>
        </section>
    )
}

export default Contact;
