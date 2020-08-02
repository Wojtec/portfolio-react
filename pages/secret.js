import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';


class Secret extends Component {

   static getInitialProps() {
        const superSecretValue = 'Super secret value';

        return { superSecretValue };
    }

    render(){
        const { superSecretValue } = this.props;
        return(
            <>
               <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1>Welcome, you are login now!</h1>
                        <h2>{ superSecretValue }</h2>
                    </BasePage>
                    <style jsx>{`
                        h1{
                            color:white;
                        }
                    `}</style>
                </BaseLayout>  
            </>
        )
    }
}

export default withAuth(Secret);