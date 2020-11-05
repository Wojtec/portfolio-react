import {Row, Col, Container} from 'reactstrap';
import SocialMedia from "./shared/SocialMedia";

const About = () => {
    return (
        <section id="about">
            <Container>
                <div className="about">
                    <div className="title-wrapper">
                        <div className="title-container">
                            <span className="title-container-decoration"></span>
                            <div className="title-container-context">
                                <h2>
                                    <span className="title-container-text">About</span>
                                </h2>
                                <p>Something about me.</p>
                            </div>
                            <span className="title-container-decoration"></span>
                        </div>
                    </div>
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
                                <p>In
                                    <span> October 2019 </span>
                                    I decided to become a
                                    <span> Fullstack developer</span>. Everyday I work hard to get closer to accomplishing this goal.</p>
                                <p>I have finished
                                    <span> Master Assembler School of Software Engineering </span>
                                    in
                                    <span> Barcelona</span>.</p>
                                <p>I chose this path of career because of my passions and interests. Creative
                                    creating new things and looking how they develop from nothing to something big
                                    gives me a lot of satisfaction and energy to carry on.</p>
                                <p>Curiosity about how changes and improvement will affect the final form of my
                                    work are something that always accompanies me during creating and development.
                                    Also this curiosity together with self-satisfaction are something that is the
                                    most exciting to me in the whole creating process. Currently I am creating a
                                    Clinic reservation system app
                                    <span> React</span>,
                                    <span> Next.js</span>,
                                    <span> Node.js</span>,
                                    <span> Express.js </span>
                                    and no relational database
                                    <span> Mongodb</span>.</p>
                                <p className="text-center">Check my projects and personally see what I can do.</p>
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
