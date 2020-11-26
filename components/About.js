import { Row, Col, Container } from "reactstrap";
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
              <img
                className="about-content-image"
                src="images/newHero600.png"
              ></img>
            </Col>
            <Col md="8">
              <div className="about-content">
                <h3 className="about-content-title">
                  <span>Hello, my name is Wojtek Poninski.</span>
                </h3>
              </div>
              <div className="about-content-description">
                <p>
                  In
                  <span> 2018 </span>I decided to become a
                  <span> Full Stack Developer</span>. Everyday I work hard, to
                  get closer this goal.
                </p>
                <p>
                  I have finished
                  <span> Master Assembler School of Software Engineering </span>
                  in
                  <span> Barcelona</span>.
                </p>
                <p>
                  I chose this career path because of my passions and interests.
                  I like to use my creativity to create new things and look at
                  how they develop from nothing to something big. This gives me
                  a lot of satisfaction and energy to carry on.
                </p>
                <p>
                  I am very curious about how changes and improvement will
                  affect the final form of my work. This feeling gives me a
                  strong motivation to keep learning new things about
                  technology. Currently I am creating a Clinic reservation
                  system app
                  <span> React</span>,<span> Next.js</span>,
                  <span> Node.js</span>,<span> Express.js </span>
                  and no relational database
                  <span> MongoDB</span>.
                </p>
                <p className="text-center">
                  Check my projects and personally see what I can do.
                </p>
              </div>
              <SocialMedia />
            </Col>
          </Row>
          <div className="about-long"></div>
        </div>
      </Container>
    </section>
  );
};

export default About;
