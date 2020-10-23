import React, { Component } from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends Component {
    
    render() {
        return (
                <BaseLayout {...this.props.auth}>
                    <BasePage className="about-page" title="I'm about page title">
                    </BasePage>
                </BaseLayout>
        )
    }
}

export default About;

