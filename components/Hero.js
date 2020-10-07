import {Row, Col, Container} from 'reactstrap';

const Hero = (props) => {

    return (
        <section id="/" className="background-image">
            <Container>
                <div className="hero-content">
                    <div className="hero-content-wrapper">
                        <div>
                            <h1 className="hero-content-subtitle">My name is Wojtek</h1>
                        </div>
                        <h1 className="hero-content-title">
                            <span className="hero-content-title-decoration"></span>
                            <span className="hero-content-title-text">I CAN CREATE</span>
                            <span className="hero-content-title-decoration"></span>
                        </h1>
                        <p className="hero-content-subtitle">YOUR WEBSITE</p>
                        <div className="hero-content-buttons">
                            <a className="hero-content-buttons-btn" href="#">What I do</a>
                            <a className="hero-content-buttons-btn" href="#">Projects</a>
                        </div>
                    </div>
                    <div className="hero-content-arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="hero-content-description">Learn more about me and what I do</div>
                </div>
            </Container>
        </section>
    )
}

export default Hero;
