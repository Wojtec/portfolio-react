import React, { Component, Fragment } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import Link from 'next/link';

import { 
    Col, 
    Row, 
    CardHeader, 
    CardBody, 
    CardText, 
    Card, 
    CardTitle 
} from "reactstrap";

import axios from 'axios';

class Portfolio extends Component {
    state = {
        posts: [],
    }
    static async getInitialProps() {
        let posts = [];
        try{
            const response = await  axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch(err){
            console.log(err);
        }
        
        return {posts: posts.splice(0, 10)};
    }

    async componentDidMount() {
        let posts = [];
        try{
            const response = await  axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
            this.setState({
                posts,
            })
        } catch(err){
            console.log(err);
        }
    }
    
    renderPosts(posts){
        console.log(posts);
        return ( posts.map((post, index) => {
            return (
                <Col md="4">
                    <Fragment key={index}>
                        <span>
                            <Card className="portfolio-card">
                                <CardHeader className="portfolio-card-header">some header</CardHeader>
                                <CardBody >
                                    <p className="portfolio-card-city">location</p>
                                    <CardTitle className="portfolio-card-title">some title</CardTitle>
                                    <CardText className="portfolio-card-text">some text</CardText>
                                    <div className="readMore"> </div>
                                </CardBody>
                            </Card>
                        </span>
                    </Fragment>
                </Col>
            )
            }))
    }

    render(){ 
        const { posts } = this.state;
        const { landingPage } = this.props;
        return(
            <>
            <BaseLayout {...this.props.auth} landingPage={ landingPage }>
                <BasePage className="portfolio-page" title="Hi im Portfolio...">
                    <Row>
                        {this.renderPosts(posts)}
                    </Row>
                </BasePage>
            </BaseLayout>
            </>
        )
    }
}

export default Portfolio;