import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Secret extends Component {

    renderSecretPage() {
        const { isAuthenticated } = this.props.auth;
        return isAuthenticated ? (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>Hi I'm secret page</h1>
                </BasePage>
                <style jsx>{`
                    h1{
                        color:white;
                    }
                `}</style>
            </BaseLayout>
        ) : (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>You need login first!</h1>
                </BasePage>
                <style jsx>{`
                    h1{
                        color:white;
                    }
                `}</style>
            </BaseLayout>  
        );

    }


    render(){
        return(
            <>
            {this.renderSecretPage()}
            </>
        )
    }
}

export default Secret;