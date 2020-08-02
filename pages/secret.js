import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import axios from 'axios';

class Secret extends Component {
    state = {
        secretData : []
    }

   static getInitialProps() {
        const superSecretValue = 'Super secret value';

        return { superSecretValue };
    }
   async componentDidMount() {
        const res = await axios.get('/api/v1/secret');
        const secretData = res.data;

        this.setState({
            secretData
        });
    }
    
    displaySecretData = () => {
        const { secretData } = this.state;

       return ( secretData && secretData.length > 0 ) ? 
       ( secretData.map((data) => (
           <div>
           <p>{data.title}</p>
           <p>{data.description}</p>
           </div>
       )))
       :
       ( undefined )
    }

    render(){
        const { superSecretValue } = this.props;
        console.log(this.state);
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

export default withAuth(Secret);