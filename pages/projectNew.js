import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import ProjectForm from '../components/project/projectForm';
import { Row, Col } from 'reactstrap';
import withAuth from '../components/hoc/withAuth';

import { createProject } from '../actions';


class ProjectNew extends Component {
   state = {
       error: undefined
   }

    saveProject = (projectData) => {
        createProject(projectData).then((project) => { 
            this.setState({
                error: undefined
            })
        }).catch((err) => {
           this.setState({
               error: err.message
           })
        });
        
    }
    
    render() {
        const { error } = this.state;
        return (
                <BaseLayout {...this.props.auth}>
                    <BasePage className="portfolio-create-page" title="Create new project">
                    <Row>
                        <Col md="6">
                            <ProjectForm  error={error} onSubmit={this.saveProject}/>
                        </Col>
                    </Row>
                    </BasePage>
                </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(ProjectNew);

