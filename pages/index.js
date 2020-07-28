import BaseLayout from '../components/layouts/BaseLayout';
import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';

class Index extends Component {

    render(){
        return (
        <BaseLayout className="cover">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/images/background.png" alt="my background"/>
                    </div>
                </div>

            <Container>
                <Row>
                    <Col md="6" className="hero-welcome-wrapper">
                    <section className="hero-welcome-text">
                        <h1>
                            Welcome to the portfolio website of Wojtek Poninski.
                        </h1>
                    </section>
                    <section>
                        <h1>
                            Let's take a look on my work.
                        </h1>
                    </section>
                    </Col>
                    <Col md="6">
                    <section className="hero-section">
                        <div className={`flipper`}>
                            <div className="back">
                                <div className="hero-section-content">
                                    <h2>Full Stack Web Developer</h2>
                                    <div className="hero-section-content-intro">
                                        Have a look at my portfolio and job history.
                                    </div>
                                </div>
                            <img src="/images/hero600.png" alt="image" className="image"/>
                                <div className="shadow-custom">
                                    <div className="shadow-inner"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Col>
                </Row>
            </Container>
        </BaseLayout>        
        )
    }
    
}

export default Index;