import BaseLayout from '../components/layouts/BaseLayout';
import React, {Component} from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/contactForm';
class Index extends Component {

    render() {

        return (
            <BaseLayout className="cover" {...this.props.auth} headerType="index">
                <Hero/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </BaseLayout>
        )
    }

}

export default Index;