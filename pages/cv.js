import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Cv extends Component {
    render(){
        return(
            <>
            <BaseLayout>
                <BasePage>
                    <h1>Hi I'm CV page</h1>
                </BasePage>
            </BaseLayout>
            </>
        )
    }
}

export default Cv;