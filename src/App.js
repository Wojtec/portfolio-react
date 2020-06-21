import React, { Component, Fragment } from 'react';

import './stylesheets/base/App.scss';

import Header from './Components/Header/Main';
import Aside from './Components/Aside/Main';
import Bside from './Components/Bside/Main';
import Wrapper from './Components/Wrapper';
import data from "./Data";

class App extends Component {
  render(){
    return (
      <Fragment>
        <div className="container">
        <Wrapper icons = { data.icons }/>

        <div className="App">
       <Header image = { data.image }/>
       <main className="main">
       <img src={data.logos} alt=""/>
       <Aside aside = { data.Aside }/>
       <Bside bside = { data.Bside }/>
      </main>
      </div>
      </div>

      </Fragment>
     
    );
  }
  
}

export default App;
