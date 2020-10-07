import {Row, Col, Container} from 'reactstrap';
import SocialMedia from "./shared/SocialMedia";

const About = () => {
    return (
        <section id="/about" className="section-about">
            <Container>
                <div className="about">
                    <h2 className="title">
                        <span className="title-decoration"></span>
                        <span className="title-text">About</span>
                        <span className="title-decoration"></span>
                        <span className="title-decoration-long"></span>
                    </h2>
                        <Row>
                            <Col md="4">
                                <img className="about-content-image" src="images/hero600.png"></img>
                            </Col>
                            <Col md="8">
                                <div className="about-content">
                                    <h3 className="about-content-title">
                                        <span>Hello, my name is Wojtek Poninski.</span>
                                    </h3>
                                </div>
                                <div className="about-content-description">
                                    <p>In October 2019 I decided to become a Fullstack developer. Everyday I work
                                        hard to get closer to accomplishing this goal.</p>
                                    <p>I have finished Master Assembler School of Software Engineering in Barcelona.</p>
                                    <p>I chose this path of career because of my passions and interests. Creative
                                        creating new things and looking how they develop from nothing to something big
                                        gives me a lot of satisfaction and energy to carry on.</p>
                                    <p>Curiosity about how changes and improvement will affect the final form of my
                                        work are something that always accompanies me during creating and development.
                                        Also this curiosity together with self-satisfaction are something that is the
                                        most exciting to me in the whole creating process. Currently I am creating a
                                        Clinic reservation system app React, Next.js, Node.js, Express and no relational
                                        database Mongodb.</p>
                                    <p>Check my projects and personally see what I can do.</p>
                                </div>
                                <SocialMedia/>
                            </Col>
                        </Row>
                    <div className="about-long"></div>
                </div>
            </Container>
        </section>
    )
}

export default About;
