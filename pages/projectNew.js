import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioForm from '../components/portfolio/portfolioForm';
import withAuth from '../components/hoc/withAuth';
import { Row, Col } from 'reactstrap';

class PortfolioNew extends Component {
   

    savePortfolio = (portfolioData) => {
        alert(JSON.stringify(portfolioData, null, 2));

    }
    
    render() {
        return (
                <BaseLayout {...this.props.auth}>
                    <BasePage className="portfolio-create-page" title="Portfolio new page">
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            <PortfolioForm onSubmit={this.savePortfolio}/>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                    </BasePage>
                </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioNew);

