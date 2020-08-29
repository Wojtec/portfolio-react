import BaseLayout from '../components/layouts/BaseLayout';
import React, { Component } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import Typed from 'react-typed';
import Hero from '../components/Hero';
import About from '../components/About';

class Index extends Component {

    render(){
        const { isAuthenticated, user } = this.props.auth;

        return (
            <BaseLayout className="cover" {...this.props.auth} headerType="index">
                <section className="main-section ">
                        <Hero/>
                        <About/>
                </section>
            </BaseLayout>        
        )
    }
    
}

export default Index;