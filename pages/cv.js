import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import {Row, Col, Container} from 'reactstrap';
import SocialMedia from '../components/shared/SocialMedia';
class Cv extends Component {
    render(){
        return(
            <>
            <BaseLayout {...this.props.auth}>
                <BasePage title="Get my CV" className="page-cv background-skills">
                    <Container>
                             <Row>
                                <Col md={{size:'10', offset:'1'}}>
                                    <Row>
                                    <SocialMedia className="cv-container-socialMedia"></SocialMedia>

                                    <div className="cv-container">
                                        <a download="PoninskiCV.pdf" className="btn btn-success" href="/static/PoninskiCV.pdf">
                                            Download
                                        </a>
                                    </div>
                                    </Row>
                                    <iframe  className="iframe" src="/static/PoninskiCV.pdf"></iframe>
                                </Col>
                            </Row>
                    </Container>
                </BasePage>
            </BaseLayout>
            </>
        )
    }
}

export default Cv;