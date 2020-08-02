import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

export default function withAuth(Index) {

    return class withAuth extends Component {

        static async getInitialProps(args) {
            const propsPage = await Index.getInitialProps && await Index.getInitialProps(args);
            
            return {...propsPage};
        }
        
        renderProtectedPage() {
            const { isAuthenticated } = this.props.auth;

            return isAuthenticated ? (
            <Index {...this.props }/>  
            ) : (
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1>You are not authorizated to this page please login first!</h1>
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
            return (
                <>
                {this.renderProtectedPage()}
                </>
                )
        }

    }

}