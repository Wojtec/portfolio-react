import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';

import { getSecretData, getSecretDataServer } from '../actions';

class Secret extends Component {
    state = {
        secretData : []
    }

   static async getInitialProps({req}) {
        const anotherSecret =  await getSecretData(req);
       
        return { anotherSecret };
    }

   async componentDidMount() {
        const secretData = await getSecretData();

        this.setState({
            secretData
        });
    }
    
    displaySecretData = () => {
        const { secretData } = this.state;

       return ( secretData && secretData.length > 0 ) ? 
       ( secretData.map((data) => (
           <div key={data.id}>
           <p>{data.title}</p>
           <p>{data.description}</p>
           </div>
       )))
       :
       ( undefined )
    }

    render(){
        const { superSecretValue } = this.props;
        return(
            <>
               <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1>Welcome, you are login now!</h1>
                        <h2>{ superSecretValue }</h2>
                        <h3>
                        {this.displaySecretData()}
                        </h3>
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

export default withAuth()(Secret);