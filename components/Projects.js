import {Row, Col, Container} from 'reactstrap';
import { getProjects } from '../actions';
import React, { Component } from 'react';
import ProjectCard from './project/projectCard';

class Projects extends Component {

    state = {
        projects: []
    }

    async componentDidMount() {

        const data = await getProjects();
        this.setState({projects: data});

    }

    renderPosts(projectsData) {

        return (projectsData.map((project, index) => {
            return (
                <Col md="4" key={index}>
                    <ProjectCard project={project}/>
                </Col>
            )
        }))
    }

    render() {
        const {projects} = this.state;

        return (
            <section id="/projects" className="background-projects">
                <Container>
                    <div className="projects">
                        <div className="title-wrapper">
                            <div className="title-container">
                                <span className="title-container-decoration"></span>
                                <div className="title-container-context">
                                    <h2>
                                        <span className="title-container-text">Projects</span>
                                    </h2>
                                    <p>Some of my projects.</p>
                                </div>
                                <span className="title-container-decoration"></span>
                            </div>
                        </div>
                        <Row>
                            {this.renderPosts(projects)}
                        </Row>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Projects;
