import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Components/Header/Main';
import Aside from './Components/Aside/Main';
import Bside from './Components/Bside/Main';
import data from "./Data";

class App extends Component {
  render(){
    return (
      <Fragment>
       <Header image = { data.image }/>
       <main className="App">
       <Aside aside = { data.Aside }/>
       <Bside bside = { data.Bside }/>
      </main>
      </Fragment>
     
    );
  }
  
}

export default App;
