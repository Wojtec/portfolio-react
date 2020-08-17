import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import ProjectForm from '../components/project/projectForm';
import { Row, Col } from 'reactstrap';
import withAuth from '../components/hoc/withAuth';
import { createProject } from '../actions';
import { Router } from  '../routes';

const INITIAL_VALUES = { 
    title: '', 
    description: '',
    startDate: '',
    endDate: '',
}

class ProjectNew extends Component {
   state = {
       error: undefined
   }

    saveProject = (projectData, { setSubmitting }) => {
        setSubmitting(true);
        createProject(projectData)
        .then((project) => { 
            setSubmitting(false);
            this.setState({ error: undefined })
            Router.pushRoute('/projects')

        }).catch((err) => {
            const error = err.message || 'Server Error';
            setSubmitting(false);
            this.setState({ error })
        });
        
    }
    
    render() {
        const { error } = this.state;
        return (
                <BaseLayout {...this.props.auth}>
                    <BasePage className="portfolio-create-page" title="Create new project">
                        <Row>
                            <Col md="6">
                                <ProjectForm  
                                initialValues={INITIAL_VALUES} 
                                error={error} 
                                onSubmit={this.saveProject}/>
                            </Col>
                        </Row>
                    </BasePage>
                </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(ProjectNew);

