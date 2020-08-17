import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import ProjectForm from '../components/project/projectForm';
import { Row, Col } from 'reactstrap';
import withAuth from '../components/hoc/withAuth';
import { updateProject, getProjectById } from '../actions';
import { Router } from  '../routes';


class ProjectEdit extends Component {
    state = {
        error: undefined
    }
    
    static async getInitialProps({query}) {
        let project = {};

        try {
           project = await getProjectById(query.id);
        } catch(error) {
            console.log(error);
        }
        console.log(project);
        return { project };
    }

    saveUpdateProject = (projectData, { setSubmitting }) => {
        setSubmitting(true);
        updateProject(projectData)
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
        const { project } = this.props;
        return (
                <BaseLayout {...this.props.auth}>
                    <BasePage className="portfolio-create-page" title="Update Project">
                    <Row>
                        <Col md="6">
                            <ProjectForm  
                            initialValues={project}
                            error={error} 
                            onSubmit={this.saveUpdateProject}/>
                        </Col>
                    </Row>
                    </BasePage>
                </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(ProjectEdit);

