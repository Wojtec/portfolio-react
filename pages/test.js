import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import axios from 'axios';

class Test extends Component {
    static async getInitialProps({query}) {
              const testId = query.id;
        return {testId};
    }
    
    render(){ 
        const { testId } = this.props;
        return(
            <>
            <BaseLayout>
                <h1>Hi im Test Page... with id of : {testId}</h1>
               
            </BaseLayout>
            </>
        )
    }
}

export default Test;