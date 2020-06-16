import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Main';
import data from "./Data";



class App extends Component {
  render(){

    return (
      <main className="App">
      <Header props = { data }/>
      
      </main>
    );
  }
  
}

export default App;
