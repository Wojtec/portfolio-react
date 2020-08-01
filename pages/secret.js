import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';


class Secret extends Component {


    render(){
        console.log(this.props);
        return(
            <>
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
            </>
        )
    }
}

export default withAuth(Secret);