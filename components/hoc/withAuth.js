import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

const nameSpace = 'http://localhost:3000//';

const withAuth = role => Index => 
    class withAuth extends Component {

        static async getInitialProps(args) {
            const propsPage = await Index.getInitialProps && await Index.getInitialProps(args);
            
            return {...propsPage};
        }
    
        renderProtectedPage() {
            const { isAuthenticated, user } = this.props.auth;
            const userRole = user && user[`${nameSpace}role`];
            let isAuthorized = false;

            if(role){
                if(userRole && userRole === role) { isAuthorized = true } 
            }  else {
            isAuthorized = true
            }

            if(!isAuthenticated){
                return (
                    <BaseLayout {...this.props.auth}>
                        <BasePage>
                            <h1>You are not authenticated to this page please login first!</h1>
                        </BasePage>
                        <style jsx>{`
                            h1{
                                color:white;
                            }
                        `}</style>
                    </BaseLayout> 
                )
            } else if (!isAuthorized) {
                    return (
                    <BaseLayout {...this.props.auth}>
                        <BasePage>
                            <h1>You are not authorizated to see this page you dont have permition!</h1>
                        </BasePage>
                        <style jsx>{`
                            h1{
                                color:white;
                            }
                        `}</style>
                    </BaseLayout> 
                )
            } else {
                return ( <Index {...this.props }/> )
            }
        }

        render(){
            return (
                <>
                {this.renderProtectedPage()}
                </>
            )
        }
    }

export default withAuth;



