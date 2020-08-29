import {Row, Col, Container} from 'reactstrap';


const Hero = (props) => {

    return(
            <Row >
                <Col xs="12" className ="background-image">
                <Container>

                    <section className="hero-content">
                            <h1 className="hero-content-title">
                                <span className="hero-content-title-decoration"></span>
                                <span className="hero-content-title-text">CREATE</span>
                                <span className="hero-content-title-decoration"></span>
                            </h1>
                            <p className="hero-content-subtitle">YOUR OWN WEBSITE</p>
                            <div className="hero-content-buttons">
                                <a className="hero-content-buttons-btn" href="#">Projects</a>
                                <a className="hero-content-buttons-btn" href="#">Skills</a>
                            </div>
                            <div className="hero-content-description">Learn more about what I do</div>
                            <div className="hero-content-arrow">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                    </section>
                    </Container>
                </Col>            
            </Row>
    )
}

export default Hero;






