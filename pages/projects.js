import React, { Component, Fragment } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import ProjectCard from '../components/project/projectCard';
import { Router } from '../routes';
import { getProjects, deleteProject } from '../actions';

import { 
    Button,
    Col, 
    Row
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

    navigateToEdit(projectId, e) {
        e.stopPropagation();
        Router.pushRoute(`/projects/${projectId}/edit`)
    }

    displayDeleteWarning(projectId, e) {
        e.stopPropagation();
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
                    <ProjectCard project={project}>
                        { isAuthenticated && isSideOwner &&
                            <div>
                                <Button
                                    onClick={(e) => this.navigateToEdit(project._id, e)} 
                                    className="btn btn-warning btn-lg" 
                                    color="warning">
                                        Edit
                                </Button>
                                <Button
                                    onClick={(e) => this.displayDeleteWarning(project._id, e)} 
                                    className="btn btn-danger btn-lg" 
                                    color="danger">
                                        Delete
                                </Button>
                            </div>
                        }
                    </ProjectCard>
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