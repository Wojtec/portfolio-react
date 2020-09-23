import BaseLayout from '../components/layouts/BaseLayout';
import React, { Component } from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
class Index extends Component {

    render(){
        const { isAuthenticated, user } = this.props.auth;

        return (
            <BaseLayout className="cover" {...this.props.auth} headerType="index">
                <section className="main-section ">
                        <Hero/>
                        <About/>
                        <Projects/>
                        
                </section>
            </BaseLayout>        
        )
    }
    
}

export default Index;