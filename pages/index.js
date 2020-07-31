import BaseLayout from '../components/layouts/BaseLayout';
import React, { Component, useEffect} from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import Typed from 'react-typed';


class Index extends Component {

    render(){
        return (
            <BaseLayout className="cover">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/images/background-img2.png" alt="my background"/>
                    </div>
                    <Row className="self-type-row">
                        <Col md="12">
                            <section className="hero-welcome-text">
                                <h1>
                                    <Typed
                                        loop
                                        typeSpeed={60}
                                        backSpeed={50}
                                        strings={[" Welcome to the portfolio website of Wojtek Poninski"]}
                                        smartBackspace
                                        shuffle={false}
                                        backDelay={1}
                                        fadeOut={false}
                                        fadeOutDelay={1}
                                        loopCount={1}
                                        className="self-type"
                                        showCursor
                                        cursorChar="|"
                                    />                        
                                </h1>
                            </section>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col md="6">
                                <section className="hero-section">
                                    <div className={`flipper`}>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                <h2>Full Stack Web Developer</h2>
                                                    <div className="hero-section-content-intro">
                                                        <span>Right now, right here.</span>
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
                            <Col md="6" className="hero-welcome-wrapper">
                                <section className="hero-welcome-bio">
                                    <h1>
                                        Let's take a look on My ability.
                                    </h1>
                                    <Button color="info">
                                        My ability
                                    </Button>{' '}
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