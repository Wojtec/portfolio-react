import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

export default function withAuth(Index) {

    return class withAuth extends Component {
        
        renderProtectedPage() {
            const { isAuthenticated } = this.props.auth;

            return isAuthenticated ? (
            <Index {...this.props }/>  
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
            return this.renderProtectedPage;
        }

    }

}