import {Row, Col, Container} from 'reactstrap';
import SocialMedia from "./shared/SocialMedia";

const About = () => {
    return(
        <section id="/about" className="section-about">
                <Row>
                    <Col xs="12">
                    <Container>

                        <div className="about">
                            <h2 className="about-title">
                                <span className="about-title-decoration"></span>
                                <span className="about-title-text">About</span>
                                <span className="about-title-decoration"></span>     
                                <span className="about-title-decoration-long"></span>               
                            </h2>
                            <article>
                                <Row>
                                    <Col xs="12">
                                        <div className="about-content">
                                            <h2 className="about-content-title">
                                                <span>Hello, my name is Wojtek Poninski.</span>
                                            </h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <img className="about-content-image" src="images/hero600.png"></img>
                                    </Col>
                                    <Col md="8">
                                        <div className="about-content-description">
                                            <h3>My passion is creative Web Application creating.</h3>
                                            <p>In October 2019 I decided to become a Fullstack developer. Everyday I work hard to get closer to accomplishing this goal.</p>
                                            <p>I have finished Master Assembler School of Software Engineering in Barcelona.</p>
                                            <p>I chose this path of career because of my passions and interests. Creative creating new things and looking how they develop from nothing to something big gives me a lot of satisfaction and energy to carry on.</p>
                                            <p>Curiosity about how changes and improvement will affect the final form of my work are something that always accompanies me during creating and development. Also this curiosity together with self-satisfaction are something that is the most exciting to me in the whole creating process. Currently I am creating a Clinic reservation system app React, Next.js, Node.js, Express and no relational database Mongodb.</p>
                                            <p>Check my projects and personally see what I can do.</p>
                                        </div>
                                        <SocialMedia/>
                                    </Col>
                                </Row>      
                                <div className="about-long"></div>   
                            </article>                     
                        </div>
                        </Container>
                    </Col>            
                </Row>
        </section>
    )
}

export default About;






