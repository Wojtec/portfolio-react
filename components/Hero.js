import {Row, Col, Container} from 'reactstrap';
import { Link, animateScroll as scroll} from 'react-scroll';

const Hero = (props) => {

    return (
        <section id="/" className="background-image">
            <Container>
                <div className="hero-content">
                    <div className="hero-content-wrapper">
                            <div className="hero-content-subtitle">My name is Wojtek</div>
                        <h1 className="hero-content-title">
                            <span className="hero-content-title-decoration"></span>
                            <span className="hero-content-title-text">I CAN CREATE</span>
                            <span className="hero-content-title-decoration"></span>
                        </h1>
                        <div className="hero-content-subtitle">YOUR WEBSITE</div>
                        <div className="hero-content-buttons">
                        <Link
                            activeClass="active"
                            to="what"
                            spy={true}
                            smooth={true}
                            hashSpy={false}
                            offset={0}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                            className={ `hero-content-buttons-btn` }
                            href="/what"
                            >
                          What I do
                        </Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={false}
                            offset={0}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                            className={ `hero-content-buttons-btn` }
                            href="/projects"
                            >
                                Projects
                        </Link>                      
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
