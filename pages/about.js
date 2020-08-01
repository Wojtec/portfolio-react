import React, { Component } from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
class About extends Component {
   
    render() {
        return (
                <BaseLayout {...this.props.auth}>
                    <BasePage className="about-page">
                        <h1>
                            title
                        </h1>
                        <h2>
                            body
                        </h2>
                        <p>
                            id
                        </p>
                    </BasePage>
                </BaseLayout>
        )
    }
}

export default withRouter(About);

