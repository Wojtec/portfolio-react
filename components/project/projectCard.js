import React, { Component } from 'react';
import { 
    CardHeader, 
    CardBody, 
    CardText, 
    Card, 
    CardTitle 
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
            <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">{project.position}</CardHeader>
                <CardBody >
                    <CardTitle className="portfolio-card-title">{project.title}</CardTitle>
                    <CardText className="portfolio-card-text">{project.description}</CardText>
                </CardBody>
                {children}
            </Card>
            </div>
        )
    }
}

export default ProjectCard;