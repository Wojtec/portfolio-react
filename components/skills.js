import {Row, Col, Container} from 'reactstrap';

const Skills = () => {
    return(
        <section id="/blog" className="section-skills">
        <Row>
            <Col xs="12">
            <Container>

                <div className="about">
                    <h2 className="about-title">
                        <span className="about-title-decoration"></span>
                        <span className="about-title-text">What I do</span>
                        <span className="about-title-decoration"></span>     
                        <span className="about-title-decoration-long"></span>               
                    </h2>
                    <article>
                        <Row>
                            <Col md="4">
                            <div className="text-center">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-code fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                </li>
                                </ul>
                               <h3>Web Applications</h3>
                               <p>
                               I will create any of your amazing ideas. <br/> Fast web applications with animations and fully responsive content.
                               </p>
                               </div>
                            </Col>
                            <Col md="4">
                            <div className="text-center">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-cogs fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                </li>
                                </ul>
                                <h3>API Development</h3>
                               <p>
                               REST APIs are fast, efficient and secure built following best practices, using technology like Node.js, Express.js.
                               </p>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="text-center">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-link fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                </li>
                                </ul>
                                <h3>Third-party API</h3>
                               <p>
                               Third-party API integration depends on your needs and requirements.
                               </p>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                        <Col md="2"></Col>
                        <Col md="4">
                        <div className="text-center">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-database fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                </li>
                                </ul>
                                <h3>Database Design</h3>
                               <p>
                               Relational and Non-Relational Database design for Web development, built with MySQL or MongoDB.
                               </p>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="text-center">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-cloud fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                </li>
                                </ul>
                                <h3>Cloud Integration</h3>
                               <p>
                               Cloud integration on platform AWS with serverless technology like AWS Lambda.
                               </p>
                                </div>
                            </Col>
                            <Col md="2"></Col>
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

export default Skills;






