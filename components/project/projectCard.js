import React, { Component } from 'react';
import { 
    CardBody, 
    CardText, 
    Card, 
    CardTitle,
    CardImg
} from "reactstrap";

import ProjectCardDetail from './projectCardDetail';

class ProjectCard extends Component {

    state = {
        isOpen: false
    }

    handleTaggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        const { project, children} = this.props;
        const { isOpen } = this.state;
        return(
            <div  onClick={this.handleTaggle}>
            <ProjectCardDetail isOpen={isOpen} project={project} toggle={this.handleTaggle}/>
            <Card className="project-card">
            <div className="project-card-image">
            <CardImg className="project-card-image-img" top width="100%" src={project.img} alt="Card image cap" />
            </div>
                <CardBody >
                    <CardTitle className="project-card-title">{project.title}</CardTitle>
                    <CardText className="project-card-text">{project.subtitle}</CardText>
                </CardBody>
                {children}
            </Card>
            </div>
        )
    }
}

export default ProjectCard;