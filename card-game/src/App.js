import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import { Time } from './Time';
const word = "HELLO";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h2>GAME LOGIC</h2>
          </div>
      </div>
        <WordCard value={word}/>    
        <Time/>
      </div>
    );
  }
}

export default App;
