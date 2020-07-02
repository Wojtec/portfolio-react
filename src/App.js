import React, {Component, Fragment} from 'react';

import './stylesheets/base/App.scss';
import data from "./Data";

import Header from './Components/Header/Main';
import Aside from './Components/Aside/Main';
import Bside from './Components/Bside/Main';
import Wrapper from './Components/Wrapper';
import IconBar from './Components/IconBar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Wrapper icons={data.icons}/>
                <Navbar/>
                <main className="App">
                    <Hero hero={data.hero}/>
                    <Header image={data.image}/>
                    <IconBar icons={data.smallImg}/>
                    <section className="main">
                        <Aside aside={data.Aside}/>
                        <Bside bside={data.Bside}/>
                    </section>
                </main>
            </Fragment>

        );
    }

}

export default App;
