import {Row, Col, Container} from 'reactstrap';
import {getProjects} from '../actions';
import React, {Component} from 'react';
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
                        <h2 className="title">
                            <span className="title-decoration"></span>
                            <span className="title-text">Projects</span>
                            <span className="title-decoration"></span>
                            <span className="title-decoration-long"></span>
                        </h2>
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
