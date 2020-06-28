import React, { Component, Fragment } from 'react';

import './stylesheets/base/App.scss';

import Header from './Components/Header/Main';
import Aside from './Components/Aside/Main';
import Bside from './Components/Bside/Main';
import Wrapper from './Components/Wrapper';
import IconBar from './Components/IconBar';
import Navbar from './Components/Navbar';
import data from "./Data";

class App extends Component {
  render(){
    return (
      <Fragment>
        <Wrapper icons = { data.icons }/>
        <Navbar/>
        <div className="App">
       <Header image = { data.image }/>
       <IconBar icons = { data.smallImg }/>
       <section className="main">
       <Aside aside = { data.Aside }/>
       <Bside bside = { data.Bside }/>
      </section>
      </div>
      </Fragment>
     
    );
  }
  
}

export default App;
