import {Row, Col, Container} from 'reactstrap';

const Skills = () => {
    return (
        <section id="/blog" className="section-skills">
            <Container>
                <div className="skills">
                    <h2 className="title">
                        <span className="title-decoration"></span>
                        <span className="title-text">What I do</span>
                        <span className="title-decoration"></span>
                        <span className="title-decoration-long"></span>
                    </h2>
                    <Row>
                        <Col md="4">
                            <div className="skill text-center">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <span className="fa-stack fa-lg exp">
                                            <i className="fa fa-code fa-stack-1x fa-inverse fa-3x "></i>
                                        </span>
                                    </li>
                                </ul>
                                <h3 className="skill-title">Web Applications</h3>
                                <p className="skill-text">
                                    I will create any of your amazing ideas. Fast web applications with animations
                                    and fully responsive content.
                                </p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="skill text-center">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <span className="fa-stack fa-lg exp">
                                            <i className="fa fa-cogs fa-stack-1x fa-inverse fa-3x "></i>
                                        </span>
                                    </li>
                                </ul>
                                <h3 className="skill-title">API Development</h3>
                                <p className="skill-text">
                                    REST APIs are fast, efficient and secure built following best practices. Using
                                    technology like Node.js and Express.js.
                                </p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="skill text-center">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <span className="fa-stack fa-lg exp">
                                            <i className="fa fa-link fa-stack-1x fa-inverse fa-3x "></i>
                                        </span>
                                    </li>
                                </ul>
                                <h3 className="skill-title">Third-party API</h3>
                                <p className="skill-text">
                                    Third-party API integration of any provider, dependent on your needs and
                                    requirements.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2"></Col>
                        <Col md="4">
                            <div className="skill text-center">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <span className="fa-stack fa-lg exp">
                                            <i className="fa fa-database fa-stack-1x fa-inverse fa-3x "></i>
                                        </span>
                                    </li>
                                </ul>
                                <h3 className="skill-title">Database Design</h3>
                                <p className="skill-text">
                                    Relational and Non-Relational Database design for Web development, built with
                                    MySQL or MongoDB.
                                </p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="skill text-center">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <span className="fa-stack fa-lg exp">
                                            <i className="fa fa-cloud fa-stack-1x fa-inverse fa-3x "></i>
                                        </span>
                                    </li>
                                </ul>
                                <h3 className="skill-title">Cloud Integration</h3>
                                <p className="skill-text">
                                    Cloud integration on platform Amazon Web Services with serverless technology
                                    like AWS Lambda.
                                </p>
                            </div>
                        </Col>
                        <Col md="2"></Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Skills;