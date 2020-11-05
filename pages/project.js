import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import {Row, Col, Container} from 'reactstrap';
import { getProjectById } from '../actions';
import Projects from '../components/Projects';
import { Router } from  '../routes';


class Project extends Component {

    state = {
        moreProjects: false,
    }

    static async getInitialProps({query}) {
        let project = {};

        try {
            if(!query) {
                project = "";
            }
           project = await getProjectById(query.id);
        } catch(error) {
            console.log(error);
        }
        console.log(project);
        return { project };
    }

    stackList = (stacks) =>{
        return  stacks.map(stack => <p key={stack}>{"-"+stack }</p>)


    }

    setProjects = (boolen) => {
        if(boolen === true){
        Router.pushRoute('/project')
        }
        this.setState({
            moreProjects: boolen
        })

    }

    render(){
        console.log(this.state.moreProjects);
        const {project } = this.props;
        console.log(project)
        return(
            <>
            <BaseLayout {...this.props.auth}>
            {this.state.moreProjects ?  
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
                                                <a onClick={()=> this.setProjects(true)} className="btn btn-success">
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