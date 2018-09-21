import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';
import { Time } from './Time';
import { Footer } from './Footer';
const word = "HELLO";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h2>GAME LOGIC</h2>
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
      </div>
        <WordCard value={word}/>    
        <Time/>
        <Footer/>
      </div>
    );
  }
}

export default App;
