import BaseLayout from '../components/layouts/BaseLayout';
import React, { Component } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import Typed from 'react-typed';

class Index extends Component {

    render(){
        const { isAuthenticated, user } = this.props.auth;

        return (
            <BaseLayout className="cover" {...this.props.auth} headerType="index">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/images/background-img4.png" alt="my-background"/>
                    </div>
                    <Container>
                    <Row>
                        <Col xs="12">
                             <section className="hero-content">
                                 <h1 className="hero-content-title">
                                     <span className="hero-content-title-decoration"></span>
                                     <span className="hero-content-title-text">CREATE</span>
                                     <span className="hero-content-title-decoration"></span>
                                 </h1>
                                 <p className="hero-content-subtitle">YOUR OWN WEBSITE</p>
                             </section>
                        </Col>            
                    </Row>
                    </Container>
                </div>
            </BaseLayout>        
        )
    }
    
}

export default Index;