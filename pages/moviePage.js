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
                <BasePage title="Movie Page" className="movie-page">
                        <Row>
                            
                        </Row>
                </BasePage>
            </BaseLayout>
            </>
        )
    }
}

export default Cv;