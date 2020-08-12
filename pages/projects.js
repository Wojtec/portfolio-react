import React, { Component, Fragment } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import Link from 'next/link';

import { getProjects } from '../actions';

import { 
    Col, 
    Row, 
    CardHeader, 
    CardBody, 
    CardText, 
    Card, 
    CardTitle 
} from "reactstrap";

class Portfolio extends Component {

    static async getInitialProps() {
        let projectsData = {};
        try{
            projectsData = await getProjects();
            
        } catch(err){
            console.log(err);
        }
        
        return { projectsData };
    }
    
    renderPosts(projectsData){

        return ( projectsData.map((project, index) => {
            return (
                <Col md="4">
                    <Fragment key={index}>
                        <span>
                            <Card className="portfolio-card">
                                <CardHeader className="portfolio-card-header">{project.position}</CardHeader>
                                <CardBody >
                                    <p className="portfolio-card-city">{project.location}</p>
                                    <CardTitle className="portfolio-card-title">{project.title}</CardTitle>
                                    <CardText className="portfolio-card-text">{project.description}</CardText>
                                    <div className="readMore">{project.company}</div>
                                </CardBody>
                            </Card>
                        </span>
                    </Fragment>
                </Col>
            )
            }))
    }

    render(){ 
        const { projectsData } = this.props;

        return(
            <>
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="My projects">
                    <Row>
                        {this.renderPosts(projectsData)}
                    </Row>
                </BasePage>
            </BaseLayout>
            </>
        )
    }
}

export default Portfolio;