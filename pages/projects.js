import React, { Component, Fragment } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Router } from '../routes';
import { getProjects, deleteProject } from '../actions';

import { 
    Button,
    Col, 
    Row, 
    CardHeader, 
    CardBody, 
    CardText, 
    Card, 
    CardTitle 
} from "reactstrap";

class Projects extends Component {
    
static async getInitialProps() {
    let projectsData = {};
    try{
        projectsData = await getProjects();
        
    } catch(err){
        console.log(err);
    }
    
    return { projectsData };
}

displayDeleteWarning(projectId) {
    const isConfirm = confirm('Are you sure that you wanna delete project?');

    if(isConfirm){
        this.deleteProject(projectId);
    }
}

deleteProject = (projectId) => {
    deleteProject(projectId)
    .then(() => {
        Router.pushRoute('/projects')
    })
    .catch(err => {
        console.log(err);
    })
}
    
renderPosts(projectsData){
    const { isAuthenticated, isSideOwner } = this.props.auth;

    return ( projectsData.map((project, index) => {
        return (
            <Col md="4" key={index}>
                <Fragment>
                    <span>
                        <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">{project.position}</CardHeader>
                            <CardBody >
                                <p className="portfolio-card-city">{project.location}</p>
                                <CardTitle className="portfolio-card-title">{project.title}</CardTitle>
                                <CardText className="portfolio-card-text">{project.description}</CardText>
                                <div className="readMore">{project.company}</div>
                            </CardBody>
                            { isAuthenticated && isSideOwner &&
                                <div>
                                    <Button
                                        onClick={() => Router.pushRoute(`/projects/${project._id}/edit`)} 
                                        className="btn btn-warning btn-lg" 
                                        color="warning">
                                            Edit
                                    </Button>
                                    <Button
                                        onClick={() => this.displayDeleteWarning(project._id)} 
                                        className="btn btn-danger btn-lg" 
                                        color="danger">
                                            Delete
                                    </Button>
                                </div>
                            }
                        </Card>
                    </span>
                </Fragment>
            </Col>
        )
    }))
}

render(){ 
    const { projectsData } = this.props;
    const { isAuthenticated, isSideOwner } = this.props.auth;
        return(
            <>
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="My projects">
                    { isAuthenticated && isSideOwner &&
                        <Button 
                                onClick={() => Router.pushRoute('/projectNew')} 
                                className="btn btn-success btn-lg" 
                                color="success">Create Project
                        </Button>
                    }
                    <Row>
                        {this.renderPosts(projectsData)}
                    </Row>
                </BasePage>
            </BaseLayout>
            </>
        )
    }
}

export default Projects;