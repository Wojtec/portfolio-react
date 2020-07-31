import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Blog extends Component {
    render(){
        return(
            <>
            <BaseLayout>
                <BasePage>
                    <h1>Hi I'm Blog page</h1>
                </BasePage>
            </BaseLayout>
            </>
        )
    } 
}
export default Blog;