import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import {Row, Col, Container} from 'reactstrap';
import { getProjectById } from '../actions';


class Project extends Component {


    static async getInitialProps({query}) {
        let project = {};
        console.log(query.id)

        try {
           project = await getProjectById(query.id);
        } catch(error) {
            console.log(error);
        }
        console.log(project);
        return { project };
    }

    stackList = (stacks) =>{

        return  stacks.map(stack => <p>{"-"+stack }</p>)


    }


    render(){
        const {project} = this.props;

        return(
            <>
            <BaseLayout {...this.props.auth}>
                <BasePage title={project.title} className="project-page">
                    <Container>
                    <Row style={{color: "black"}}>
                        <Col>
                             <p>{project.description}</p>
                            {this.stackList(project.stack)}

                            <div className="cv-container">
                                        <a target="_blank" className="btn btn-success" href={project.demoLink}>
                                            Demo
                                        </a>
                                        <a target="_blank" className="btn btn-success" href={project.demoLink}>
                                            Github
                                        </a>
                                        <a target="_blank" className="btn btn-success">
                                            More Projects
                                        </a>
                                    </div>
                        </Col>
                            <img   src={project.imgLong}></img>
                        </Row>
                    </Container>
                </BasePage>
            </BaseLayout>
            </>
        )
    }
}

export default Project;