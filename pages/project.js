import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import {Row, Col, Container} from 'reactstrap';
import { getProjectById } from '../actions';
import Projects from '../components/Projects';
import { Router } from  '../routes';


class Project extends Component {

    static async getInitialProps({query}) {

        let project = {};

        try {

            query.id ? project = await getProjectById(query.id) : null;
            
        } catch(error) {

            console.log(error);
        }

        return { project };
    }


    stackList = (stacks) =>{

        return  stacks.map(stack => <p key={stack}>{"-"+stack }</p>)

    }

    setProjects = () => {


            Router.pushRoute('/project')

        
    }

    render(){
        const {project } = this.props;
        
        return(
            <>
            <BaseLayout {...this.props.auth}>
            {Object.entries(project).length === 0 ?  
                       <Projects setProjects={this.setProjects}/>
                    :
                <BasePage title={project.title} className="project-page">

                    <section className="project">
                        <Container>
                            <Row>
                                <Col>
                                <div className="project-container">
                                    <p>{project.description}</p>
                                    {project.stack === undefined ? null : this.stackList(project.stack)}
                                                <a target="_blank" className="btn btn-success " href={project.demoLink}>
                                                    Demo
                                                </a>
                                                <a target="_blank" className="btn btn-success" href={project.github}>
                                                    Github
                                                </a>
                                                <a onClick={()=> this.setProjects()} className="btn btn-success">
                                                    More Projects
                                                </a>
                                            </div>
                                </Col>
                                <img   src={project.imgLong}></img>
                            </Row>
                        </Container>
                    </section>
                    
                </BasePage>
                  }
            </BaseLayout>
            </>
        )
    }
}

export default Project;