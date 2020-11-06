import {Row, Col, Container} from 'reactstrap';
import { Link, animateScroll as scroll} from 'react-scroll';

const Hero = (props) => {

    return (
        <section id="home" className="background-image">
            <Container>
                <div className="hero-content">
                    <div className="hero-content-wrapper">
                            <div className="hero-content-subtitle">Hi, I'm Wojtek</div>
                             <h1 className="hero-content-title">
                            <span className="hero-content-title-decoration"></span>
                            <span className="hero-content-title-text">Full Stack Developer</span>
                            <span className="hero-content-title-decoration"></span>
                        </h1>
                        <div className="hero-content-subtitle">From Poland<img className="hero-content-subtitle-flag" src="images/poland-flag-icon-32.png"></img></div>
                        <img className="hero-content-wrapper-mernLogo" src="https://drek4537l1klr.cloudfront.net/jain/v-1/Figures/MERN.png"></img>

                        <div className="hero-content-buttons">
                        <Link
                            activeClass="active"
                            to="what"
                            spy={true}
                            smooth={true}
                            hashSpy={false}
                            offset={20}
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
                            offset={20}
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
