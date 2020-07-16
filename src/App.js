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
import Abilities from './Components/Abilities';
import animation from './Services/textAnimation';



class App extends Component {

  componentDidMount =()=>{
    animation();
  }
    render() {
        return (
            <Fragment>
                <Navbar/>
                <main className="App">

                    <Hero hero={data.hero}/>
                   
                </main>
            </Fragment>

        );
    }

}

export default App;
