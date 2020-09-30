import {Row, Col, Container} from 'reactstrap';

const Skills = () => {
    return(
        <section className="section-about">
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
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a  target="_blank" href="https://www.linkedin.com/in/poninski/">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-code fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                    </a>
                                </li>
                                </ul>
                            </Col>
                            <Col md="4">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a  target="_blank" href="https://www.linkedin.com/in/poninski/">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-cogs fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                    </a>
                                </li>
                                </ul>
                            </Col>
                            <Col md="4">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a  target="_blank" href="https://www.linkedin.com/in/poninski/">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-link fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                    </a>
                                </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="p-5 ml-5">
                        <Col md="4" className="">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a  target="_blank" href="https://www.linkedin.com/in/poninski/">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-database fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                    </a>
                                </li>
                                </ul>
                            </Col>
                            <Col md="4" className="">
                                <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a  target="_blank" href="https://www.linkedin.com/in/poninski/">
                                    <span className="fa-stack fa-lg exp">
                                        <i className="fa fa-cloud fa-stack-1x fa-inverse fa-3x "></i>
                                    </span>
                                    </a>
                                </li>
                                </ul>
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

export default Skills;






